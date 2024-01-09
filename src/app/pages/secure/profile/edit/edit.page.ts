import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  edit_profile_form: FormGroup;
  submit_attempt: boolean = false;
  name: any;
  nom: any; 

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private navController: NavController,
    private actionSheetController: ActionSheetController,
    private Data: DataService
  ) { }

  ngOnInit() {
    this.name = sessionStorage.getItem('Main_Contact_Name') !== null ? sessionStorage.getItem('Main_Contact_Name').replace(/"/g, ' ') : null;
    // Setup form
    this.edit_profile_form = this.formBuilder.group({

      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });


  }

  // Update profile picture
  async updateProfilePicture() {

    const actionSheet = await this.actionSheetController.create({
      header: 'Choose existing picture or take new',
      cssClass: 'custom-action-sheet',
      buttons: [
        {
          text: 'Choose from gallery',
          icon: 'images',
          handler: () => {
            // Put in logic ...
          }
        },
        {
          text: 'Take picture',
          icon: 'camera',
          handler: () => {
            // Put in logic ...
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }]
    });
    await actionSheet.present();
  }
  submitPassword() {
    if (this.edit_profile_form.value.newPassword !== this.edit_profile_form.value.confirmPassword) {
      this.toastService.presentToast('Erreur', 'Les mots de passe ne sont pas identiques', 'top', 'danger', 2000);
      console.log('Les mots de passe ne sont pas identiques.');
      this.edit_profile_form.reset();
      return;
    }
    if (this.edit_profile_form.valid && this.edit_profile_form.value.newPassword === this.edit_profile_form.value.confirmPassword) {
      // Logique pour soumettre le nouveau mot de passe

      const newPassword = this.edit_profile_form.value.newPassword;
      const confirmPassword = this.edit_profile_form.value.confirmPassword;
      var userData = {
        inputJson: JSON.stringify({
          CompteNo: sessionStorage.getItem('No').replace(/"/g, ''),
          Password: newPassword
        }),
      };
      // Ajoutez ici la logique pour mettre à jour le mot de passe
      this.Data.ChangePassword(userData).then((success) => {
        if (success) {
          // Affichez un message toast si le changement de mot de passe est réussi
          this.toastService.presentToast('Succès', 'Le mot de passe a été changé avec succès', 'top', 'success', 2000);
        } else {
          // Affichez un message d'erreur si le changement de mot de passe a échoué
          this.toastService.presentToast('Erreur', 'Une erreur est survenue lors du changement de mot de passe', 'top', 'danger', 2000);
        }
      });

      // Réinitialisez le formulaire après la soumission
      this.edit_profile_form.reset();
    } else {
      // Affichez un message d'erreur ou prenez d'autres mesures en cas de formulaire non valide
      console.log('erreur');
    }
  }

  // Submit form
  submit() {

    this.submit_attempt = true;

    // If form valid
    if (this.edit_profile_form.valid) {

      // Save form ...

      // Display success message and go back
      this.toastService.presentToast('Success', 'Profile saved', 'top', 'success', 2000);
      this.navController.back();

    } else {

      // Display error message
      this.toastService.presentToast('Error', 'Please fill in all required fields', 'top', 'danger', 2000);
    }
  }


}
