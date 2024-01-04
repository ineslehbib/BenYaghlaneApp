import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  no: any;
  nom: any;
  total: any;
  consomme: any;
  fillPercentage: number = 0;
  point: any;
  validity: any;
  lastDayOfCurrentMonth: any;

  constructor(
    private authService: AuthService
  ) {
    // Exemple d'utilisation
    this.lastDayOfCurrentMonth = this.getLastDayOfCurrentMonth();
    console.log(this.lastDayOfCurrentMonth);
    this.no = sessionStorage.getItem('No');
    this.nom = sessionStorage.getItem('Main_Contact_Name');
    this.total = sessionStorage.getItem('Balance');
    this.consomme = sessionStorage.getItem('Unprocessed_Points');
    this.validity = sessionStorage.getItem('Validity');
    const userData = {
      inputJson: JSON.stringify({
        input: this.no,
      }),
    };
    const success = this.authService.getFidelity(userData);
    console.log(this.authService.getFidelity(this.no));
  }
  async calculerFidelity() { }
  calculatePercentage(): number {
    if (this.total === 0) {
      return 100; // Full gauge if total points are zero
    } else {
      return ((this.total + this.consomme) / this.total) * 100;
    }
  }
  getLastDayOfCurrentMonth(): string {
    const today = new Date();
    const lastDayOfCurrentMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const day = lastDayOfCurrentMonth.getDate();
    const month = lastDayOfCurrentMonth.getMonth() + 1; // Les mois sont indexés de 0 à 11
    const year = lastDayOfCurrentMonth.getFullYear();

    // Formater le résultat comme "31/01"
    const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}`;

    return formattedDate;
  }


  ngOnInit() {


    this.calculateFillPercentage();

  }


  calculateFillPercentage() {
    this.fillPercentage = (-1 * (this.consomme) / (this.total)) * 100;
  }
  // Sign out
  signOut() {
    this.authService.signOut();
  }

}
