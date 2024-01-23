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
  total: any = '0';
  consomme: any = '0';
  fillPercentage: number = 0;
  point: any = '0';
  validity: any = '0';
  lastDayOfCurrentMonth: any;
  carte: any;
  constructor(
    private authService: AuthService
  ) {
    // Exemple d'utilisation
    this.lastDayOfCurrentMonth = this.getLastDayOfCurrentMonth();
    console.log(this.lastDayOfCurrentMonth);
    // Récupérer la valeur depuis sessionStorage et remplacer les guillemets doubles par des espaces si la valeur n'est pas null
    this.no = sessionStorage.getItem('No') !== null ? sessionStorage.getItem('No').replace(/"/g, ' ') : null;
    this.carte = sessionStorage.getItem('Carte') !== null ? sessionStorage.getItem('Carte').replace(/"/g, ' ') : null;
    this.nom = sessionStorage.getItem('Main_Contact_Name') !== null ? sessionStorage.getItem('Main_Contact_Name').replace(/"/g, ' ') : null;
    this.total = sessionStorage.getItem('Balance') !== null ? sessionStorage.getItem('Balance').replace(/"/g, ' ') : '0';
    this.consomme = sessionStorage.getItem('Unprocessed_Points') !== null ? sessionStorage.getItem('Unprocessed_Points') : '0';
    this.validity = sessionStorage.getItem('Validity') !== null ? sessionStorage.getItem('Validity').replace(/"/g, ' ') : '0';

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

    const userData = {
      inputJson: JSON.stringify({
        input: sessionStorage.getItem('Carte').replace(/"/g, ''),
      }),
    };
    const success = this.authService.getFidelity(userData);
    console.log(this.authService.getFidelity(this.no));
    this.calculateFillPercentage();

  }


  calculateFillPercentage() {
    this.fillPercentage = (-1 * (this.consomme) / (this.total)) * 100;
  }
  // Sign out
  signOut() {
    this.authService.signOut();
  }
  async onButtonClick() {
    try {
      const email = sessionStorage.getItem('Carte').replace(/"/g, ''); // Replace with the actual email or get it from user input
      const userExists = await this.authService.getUser(email);
      if (userExists) {
        console.log('User exists.');
        console.log(userExists);
        // Optionally, navigate to another page or perform additional actions
        this.no = sessionStorage.getItem('No') !== null ? sessionStorage.getItem('No').replace(/"/g, ' ') : null;
        this.carte = sessionStorage.getItem('Carte') !== null ? sessionStorage.getItem('Carte').replace(/"/g, ' ') : null;
        this.nom = sessionStorage.getItem('Main_Contact_Name') !== null ? sessionStorage.getItem('Main_Contact_Name').replace(/"/g, ' ') : null;
        this.total = sessionStorage.getItem('Balance') !== null ? sessionStorage.getItem('Balance').replace(/"/g, ' ') : '0';
        this.consomme = sessionStorage.getItem('Unprocessed_Points') !== null ? sessionStorage.getItem('Unprocessed_Points') : '0';
        this.validity = sessionStorage.getItem('Validity') !== null ? sessionStorage.getItem('Validity').replace(/"/g, ' ') : '0';

      } else {
        console.log('User does not exist.');
        // Optionally, show an error message or perform other actions
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors as needed
    }
  }
}
