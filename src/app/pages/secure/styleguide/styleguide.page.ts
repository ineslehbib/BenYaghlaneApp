import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.page.html',
  styleUrls: ['./styleguide.page.scss'],
})
export class StyleguidePage implements OnInit {
  api1: String;
  api2: String;
  api3: String;
  constructor(private AuthService: AuthService) {
    this.getCatalogueData();
  }
  ngOnInit() {
    this.getCatalogueData();
  }
  async getCatalogueData() {
    try {
      const catalogueData = await this.AuthService.getCatalogue();
      if (catalogueData) {
        // Utilisez les données du catalogue comme vous le souhaitez
        console.log('Catalogue Data:', catalogueData);

        // Exemple : Utiliser les URL des catalogues dans votre application
        this.api1 = catalogueData.Urlcatalogue1 || '';
        this.api2 = catalogueData.Urlcatalogue2 || '';
        this.api3 = catalogueData.Urlcatalogue3 || '';

        // ... faire quelque chose avec les URL des catalogues dans votre application ...
      } else {
        // Gérer le cas où les données ne sont pas disponibles
        console.error('Catalogue Data is null or undefined');
      }
    } catch (error) {
      // Gérer les erreurs lors de la récupération des données du catalogue
      console.error('Error fetching catalogue data:', error);
    }
  }
}
