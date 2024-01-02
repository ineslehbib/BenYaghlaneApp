import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  current_year: number = new Date().getFullYear();

  signup_form: FormGroup;
  submit_attempt: boolean = false;

  constructor(
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router,
    private auth: AuthService

  ) {
    this.signup_form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_repeat: ['', Validators.required],
      // Add other form controls with validators if needed
      Nom: ['', Validators.required],
      Prénom: ['', Validators.required],
      Tel: ['', Validators.required],
      Adresse: ['', Validators.required],
      Magasin: ['', Validators.required],
      Civilité: ['', Validators.required],
      Gouvernorat: ['', Validators.required],
    });

  }


  ngOnInit() {
  }

  async signUp() {

    this.submit_attempt = true;

    // If email or password is empty
    if (this.signup_form.value.email == '' || this.signup_form.value.password == '' || this.signup_form.value.password_repeat == '') {
      this.toastService.presentToast('Erreur', 'Veuillez remplir tout les champs', 'top', 'danger', 2000);
      console.log('ok');
    } else if (this.signup_form.value.password != this.signup_form.value.password_repeat) {
      this.toastService.presentToast('Erreur', 'Les mots de passes ne sont pas identiques', 'top', 'danger', 2000);
    } else {

      // Proceed with loading overlay
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Création..</p><span>Veuillez patientez</span>',
        spinner: 'crescent'
      });
      await loading.present();

      // TODO: Add your sign-up logic
      // ...
      try {
        if (this.signup_form.valid) {
          const formData = this.signup_form.value;

          // Transform the form data to the desired format
          const userData = {
            inputJson: JSON.stringify({
              codeClub: 'ECHRA VIP',
              Name: `${formData.Prénom} ${formData.Nom}`,
              Password: formData.password,
              Description: formData.Description, // Replace with the actual form control
              PhoneNo: formData.Tel,
              Adresse: formData.Adresse,
            }),
          };

          // Now, you can use the userData in your signup logic
          console.log(userData);
          await loading.present();

          const success = await this.auth.signUp(userData);

          await loading.dismiss();
          await this.router.navigate(['/home']);

          return true; // Placeholder for success
        } else {
          console.log('Form is invalid. Cannot submit.');
          return false;
        }
      } catch (error) {
        console.log('Error during signup:', error);
        throw error;
      }

      // Success messages + routing
      this.toastService.presentToast('Bienvenue!', 'Lorem ipsum', 'top', 'Succès', 2000);
      await this.router.navigate(['/home']);
      loading.dismiss();
    }
  }
}
