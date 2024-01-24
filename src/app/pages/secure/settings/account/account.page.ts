import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import { AbstractControl, ValidatorFn } from '@angular/forms';
export const phoneNumberValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
  const value = control.value;

  if (value && value.length >= 8) {
    // Check if the phone number starts with 2, 9, 3, 7, or 5
    const validPrefixes = ['2', '9', '3', '7', '5'];
    const startsWithValidPrefix = validPrefixes.some(prefix => value.startsWith(prefix));

    if (!startsWithValidPrefix) {
      return { 'invalidPrefix': true };
    }
  }

  return null;
};
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  edit_profile_form_perso: FormGroup;
  submit_attempt: boolean = false;
  name: any;
  nom: any;
  tranches = [1, 2, 3, 4, 5, 6];
  ageRanges = {
    1: '18-25',
    2: '26-35',
    3: '36-45',
    4: '46-55',
    5: '56-65',
    6: '+65',
  };
  civilities = [1, 2];
  Villes: any[];
  current_year: number = new Date().getFullYear();
  selectedDate: string;

  // Dans votre composant TypeScript
  // Dans votre composant TypeScript
  gouvernorats: string[] = [
    'Ariana',
    'Tunis',
    'Ben Arous',
    'Manouba',
    'Beja',
    'Bizerte',
    'Nabeul',
    'Gabes',
    'Gafsa',
    'Jendouba',
    'Kairouan',
    'Kasserine',
    'Kebili',
    'Kef',
    'Mahdia',
    'Medenine',
    'Monastir',
    'Sfax',
    'Sidi Bouzid',
    'Siliana',
    'Sousse',
    'Tataouine',
    'Tozeur',
    'Zaghouan'
  ];

  userData: any;
  signup_form: FormGroup;
  magasins: any[]; 
  constructor(private formBuilder: FormBuilder,
    private toastService: ToastService,
    private navController: NavController,
    private actionSheetController: ActionSheetController,
    private loadingController: LoadingController,
    private router: Router,
    private auth: AuthService,
    private data: DataService,
  ) {
  }

  ngOnInit() {
    this.signup_form = this.formBuilder.group({
      email: [sessionStorage.getItem('email').replace(/"/g, '')],
      // Add other form controls with validators if needed
      Nom: [sessionStorage.getItem('Main_Contact_Name').replace(/"/g, '')],
      Tel: [sessionStorage.getItem('telephone').replace(/"/g, ''), [phoneNumberValidator]],
      Magasin: [''],
      Civilite: ['1'],
      Gouvernorat: [''],
      tranche: [''],
      Ville: [''],
    });
    this.loadMagasins();
  }
  async Modify() {
    this.submit_attempt = true;
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Modification..</p><span>Veuillez patienter</span>',
      spinner: 'crescent',
    });

    if (this.signup_form.value.Ville == '' && this.signup_form.value.tranche == '' && this.signup_form.value.Gouvernorat == '' && this.signup_form.value.Civilite == '' && this.signup_form.value.Magasin == '' && this.signup_form.value.Tel == '' && this.signup_form.value.Nom == '') {
      this.toastService.presentToast('Erreur', 'Veuillez modifier un champ', 'top', 'danger', 2000);
      console.log('Veuillez remplir tous les champs.');
      return;
    }


    const telPattern = /^(2|9|3|7|5)\d{7}$/; // Starts with 2, 9, 3, 7, or 5, followed by 7 digits
    if (!telPattern.test(this.signup_form.value.Tel)) {
      this.toastService.presentToast('Erreur', 'Le numéro de téléphone est invalide', 'top', 'danger', 2000);
      console.log('Le numéro de téléphone doit commencer par 2, 9, 3, 7 ou 5 et avoir 8 chiffres au total.');
      return;
    }

    try {
      await loading.present();

      if (this.signup_form.valid) {
        const formData = this.signup_form.value;

        try {
          const isPhoneUnique = await this.auth.checkPhoneUnique(formData.Tel);

          if (!isPhoneUnique && (this.signup_form.value.Tel != sessionStorage.getItem('telephone').replace(/"/g, ''))) {
            this.toastService.presentToast('Erreur', 'Le numéro de téléphone est déjà utilisé', 'top', 'danger', 2000);
            console.log('Le numéro de téléphone est déjà utilisé.');
            return;
          }

          const userData = {
            inputJson: JSON.stringify({
              CompteNo: sessionStorage.getItem('No').replace(/"/g, ''),
              ContactNo: sessionStorage.getItem('Contact').replace(/"/g, ''),
              Name: formData.Nom,
              PhoneNo: formData.Tel,
              Magasin: formData.Magasin,
              email: formData.email,
              sexe: formData.Civilite,
              gouvernorat: formData.Gouvernorat,
              tranche: formData.tranche,
              Ville: formData.Ville,
            }),
          };

          console.log(userData);

          const success = await this.data.ChangeAccount(userData);

          if (success) {
            this.toastService.presentToast('Succés !', 'Modification réussie', 'top', 'success', 2000);
            await this.router.navigate(['/home']);

          } else {
            console.log('Échec de modification.');
            this.toastService.presentToast('Erreur', 'Échec de modification', 'top', 'danger', 2000);
          }
        } catch (checkPhoneError) {
          console.log('Erreur lors de la vérification du numéro de téléphone :', checkPhoneError);
          this.toastService.presentToast('Erreur', 'Une erreur est survenue lors de la vérification du numéro de téléphone', 'top', 'danger', 2000);
        } finally {
          await loading.dismiss();
        }
      } else {
        console.log('Le formulaire est invalide. Impossible de soumettre.');
        this.toastService.presentToast('Erreur', 'Le formulaire est invalide. Impossible de soumettre.', 'top', 'danger', 2000);
      }
    } catch (submitError) {
      console.log('Erreur lors de la soumission du formulaire :', submitError);
      this.toastService.presentToast('Erreur', 'Une erreur est survenue lors de la soumission du formulaire', 'top', 'danger', 2000);
    } finally {
      await loading.dismiss();
    }

  }
  async onGouvernoratChange(event: any) {
    const selectedGouvernorat = event.target.value;
    try {
      this.Villes = await this.data.getVilles(selectedGouvernorat);
      console.log(this.Villes);
    } catch (error) {
      console.error('Erreur lors du chargement des villes:', error);
    }
  }
  async loadVilles(gouvernorat: string) {
    try {
      this.Villes = await this.data.getVilles(gouvernorat);
      console.log(this.Villes);
      if (this.Villes.length > 0) {
        const defaultVille = this.Villes || '';
        this.signup_form.get('Ville').setValue(defaultVille);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des villes:', error);
    }
  }

  async loadMagasins() {
    try {
      this.magasins = await this.data.getMagasin();
      console.log(this.magasins);
      this.signup_form.get('Magasin').setValue(this.magasins[0]?.Name); // Définissez une valeur par défaut si nécessaire
      // Vous pouvez également stocker l'ensemble des magasins dans un tableau pour les utiliser dans le template
      // this.magasins = magasins.value;
    } catch (error) {
      console.error('Erreur lors du chargement des magasins:', error);
    }
  }

}
