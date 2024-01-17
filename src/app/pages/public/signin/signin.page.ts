import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  current_year: number = new Date().getFullYear();

  signin_form: FormGroup;
  submit_attempt: boolean = false;

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router,
    private DataService: DataService
  ) { }

  ngOnInit() {
    this.authService.getCatalogue();
    // Setup form
    this.signin_form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      isPhoneMode: [false], 
    });
  }
  private isCardNumberMode(input: string): boolean {
    // Implement your logic to check if the input is a card number
    // For example, you can check if it's a numeric value with a certain length
    return !isNaN(Number(input)) && input.length === 10;
  }
  // Sign in
  async signIn() {
    
    this.submit_attempt = true;
    this.signin_form.get('isPhoneMode').valueChanges.subscribe(value => {
      const label = value ? 'Numéro de téléphone' : 'Numéro de la carte';
      this.signin_form.get('email').setValidators(value ? null : Validators.required);
      this.signin_form.get('email').updateValueAndValidity();
      this.signin_form.get('email').setValue(''); // Effacez la valeur actuelle
      this.signin_form.get('email').setErrors(null); // Effacez les erreurs
      this.signin_form.get('email').markAsPristine(); // Marquez comme "non modifié"
      this.signin_form.get('email').markAsUntouched(); // Marquez comme "non touché"
    });
    const loading = await this.loadingController.create({
      message: 'Authentification ...',
    });
    if (this.signin_form.valid) {
      const email = this.signin_form.value.email;
      const password = this.signin_form.value.password;
      const isPhoneMode = this.signin_form.value.isPhoneMode;
      try {

        await loading.present();

        const success = isPhoneMode
          ? await this.authService.signInPhone(email, password)
          :
          await this.authService.signIn(email, password);
        await loading.dismiss();

        if (success) {
          // Redirect to the home page or any other page upon successful sign-in
          this.router.navigate(['/home']);
          var userData = {
            inputJson: JSON.stringify({
              CompteNo: sessionStorage.getItem('No').replace(/"/g, ''),
            }),
          };
          // Ajoutez ici la logique pour mettre à jour le mot de passe
          this.DataService.Connection(userData).then((success) => {
            if (success) {
              // Affichez un message toast si le changement de mot de passe est réussi
              console.log("changé")
            } else {
              // Affichez un message d'erreur si le changement de mot de passe a échoué
              console.log('error')
            }
          });
        } else {
          // Display an error message to the user
          this.toastService.presentToast('Erreur', 'Numéro ou mot de passe invalide', 'top', 'danger', 2000);
        }
      } catch (error) {
        // Handle and display the error to the user
        await loading.dismiss();
        this.toastService.presentToast('Erreur', 'Erreur de connexion. Veuillez réessayer', 'top', 'danger', 2000);
        console.error('Error signing in:', error);
      }

    }

  }
}
