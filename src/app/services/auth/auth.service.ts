import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiUrl: string = "http://172.17.30.217:8048/BYCDEVNUP/ODataV4/Company('GRANDE%20EPICERIE%20BEN%20YAGHLANE')";
  login: string = "MOBILE";
  password: string = "Delt@S0ft";
  APICreation: string = "http://172.17.30.217:8048/BYCDEVNUP/ODataV4/MobileApp_AccountInsertFromJson?company=GRANDE%20EPICERIE%20BEN%20YAGHLANE";
  APILoyalty: string = "http://172.17.30.217:8048/BYCDEVNUP/ODataV4/MobileApp_récuppoint?company=GRANDE%20EPICERIE%20BEN%20YAGHLANE";
  APICatalogue: string = "http://172.17.30.217:8048/BYCDEVNUP/ODataV4/Company('GRANDE%20EPICERIE%20BEN%20YAGHLANE')/Marketing";
  constructor(
    private router: Router
  ) { }

  // Get user session
  async getSession() {
    try {
      // Retrieve the user session from sessionStorage
      const userSessionString = sessionStorage.getItem('No');

      // Check if user session exists
      if (userSessionString) {
        // Parse the JSON string to get the user session object
        const userSession = JSON.parse(userSessionString);
        return userSession;
      } else {
        // If no user session is found, return null
        return null;
      }
    } catch (error) {
      console.error('Error retrieving user session:', error);
      throw error;
    }
  }

  async setSession(email: string): Promise<boolean> {
    try {
      const response = await CapacitorHttp.request({
        method: 'GET',
        url: `${this.apiUrl}/UsersList?$filter=No eq '${email}' `,
        headers: {
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });

      if (response.status === 200 && response.data.value.length > 0) {
        // Simulate setting the user session in local storage or cookies
        console.log(JSON.stringify(response.data.value[0]));
        sessionStorage.setItem('No', JSON.stringify(response.data.value[0].No));
        sessionStorage.setItem('Carte', JSON.stringify(response.data.value[0].Carte));
        sessionStorage.setItem('Main_Contact_Name', JSON.stringify(response.data.value[0].Main_Contact_Name));
        sessionStorage.setItem('Issued_Award_Points', JSON.stringify(response.data.value[0].Issued_Award_Points));
        sessionStorage.setItem('Unprocessed_Points', JSON.stringify(response.data.value[0].Unprocessed_Points));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  }
  async signInPhone(phone: string, password: string): Promise<boolean> {
    try {
      const response = await CapacitorHttp.request({
        method: 'GET',
        url: `${this.apiUrl}/UsersList?$filter=Phone eq '${phone}' and Password eq '${password}' and blockedor eq 'Active'`,
        headers: {
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });

      if (response.status === 200 && response.data.value.length > 0) {
        // Simulate setting the user session in local storage or cookies
        console.log(JSON.stringify(response.data.value[0]));
        sessionStorage.setItem('No', JSON.stringify(response.data.value[0].No));
        sessionStorage.setItem('Main_Contact_Name', JSON.stringify(response.data.value[0].Main_Contact_Name));
        sessionStorage.setItem('Issued_Award_Points', JSON.stringify(response.data.value[0].Issued_Award_Points));
        sessionStorage.setItem('Unprocessed_Points', JSON.stringify(response.data.value[0].Unprocessed_Points));
        sessionStorage.setItem('Balance', JSON.stringify(response.data.value[0].Balance));
        sessionStorage.setItem('token', JSON.stringify(response.data.value[0]['@odata.etag']));
        sessionStorage.setItem('user', JSON.stringify(response.data.value[0]));
        sessionStorage.setItem('Carte', JSON.stringify(response.data.value[0].Carte));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  }
  // Sign in
  async signIn(email: string, password: string): Promise<boolean> {
    try {
      const response = await CapacitorHttp.request({
        method: 'GET',
        url: `${this.apiUrl}/UsersList?$filter=Carte eq '${email}' and Password eq '${password}' and blockedor eq 'Active'`,
        headers: {
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });

      if (response.status === 200 && response.data.value.length > 0) {
        // Simulate setting the user session in local storage or cookies
        console.log(JSON.stringify(response.data.value[0]));
        sessionStorage.setItem('No', JSON.stringify(response.data.value[0].No));
        sessionStorage.setItem('Main_Contact_Name', JSON.stringify(response.data.value[0].Main_Contact_Name));
        sessionStorage.setItem('Issued_Award_Points', JSON.stringify(response.data.value[0].Issued_Award_Points));
        sessionStorage.setItem('Unprocessed_Points', JSON.stringify(response.data.value[0].Unprocessed_Points));
        sessionStorage.setItem('Balance', JSON.stringify(response.data.value[0].Balance));
        sessionStorage.setItem('token', JSON.stringify(response.data.value[0]['@odata.etag']));
        sessionStorage.setItem('user', JSON.stringify(response.data.value[0]));
        sessionStorage.setItem('Carte', JSON.stringify(response.data.value[0].Carte));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  }
  // Sign up
  async signUp(userData: any): Promise<boolean> {
    try {
      const response = await CapacitorHttp.request({
        method: 'POST',
        url: this.APICreation, // Replace with your sign-up endpoint
        data: userData,
        headers: {
          'Content-Type': 'application/json',  // Fix the typo here
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });

      if (response.status === 200) {
        // Handle successful signup response
        console.log('Signup successful:', response.data);
        await this.setSession(response.data.value);
        return true;
      } else {
        // Handle signup error
        console.error('Signup failed:', response.data.value);
        return false;
      }
    } catch (error) {
      console.error('Error during signup:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  }
  async checkPhoneUnique(phoneNumber: string): Promise<boolean> {
    try {
      const response = await CapacitorHttp.request({
        method: 'GET',
        url: `${this.apiUrl}/UsersList?$filter=Phone eq '${phoneNumber}'`,  // Ajout de $top=1 pour ne récupérer qu'un élément
        headers: {
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });
      console.log('Response Status:', response.status);
      if (response.status === 200 && response.data.value !== undefined) {
        console.log('Data:', response.data);
        // Vérifiez si le tableau value existe et a une longueur non nulle
        return response.data.value.length === 0;
      }

      return false;

      console.log('Request failed with status:', response.status);
      return false;
    } catch (error) {
      console.error('Error checking phone uniqueness:', error);
      throw error;
    }
  }
  async getFidelity(AccountNo: any): Promise<Boolean> {
    try {
      const response = await CapacitorHttp.request({
        method: 'POST',
        url: this.APILoyalty, // Replace with your sign-up endpoint
        data: AccountNo,
        headers: {
          'Content-Type': 'application/json',  // Fix the typo here
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });
      if (response.status === 200) {
        // Handle successful signup response
        console.log('Signup successful:', response.data);
        sessionStorage.setItem('Validity', JSON.stringify(response.data.value));
        return true;
      } else {
        // Handle signup error
        console.error('Signup failed:', response.data.value);
        return false;
      }
    } catch (error) {
      console.error('Error during signup:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  }
  async getCatalogue(): Promise<any> {
    try {
      const response = await CapacitorHttp.request({
        method: 'GET',
        url: `${this.APICatalogue}`,
        headers: {
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });

      if (response.status === 200 && response.data.value !== undefined) {
        console.log('Data:', response.data);

        // Store UrlCatalogue values in sessionStorage
        const catalogueData = response.data.value[0]; // Assuming there's only one item in the array
        sessionStorage.setItem('UrlCatalogue1', catalogueData.Urlcatalogue1 || '');
        sessionStorage.setItem('UrlCatalogue2', catalogueData.Urlcatalogue2 || '');
        sessionStorage.setItem('UrlCatalogue3', catalogueData.Urlcatalogue3 || '');

        return catalogueData;
      } else {
        // Handle the case where status is not 200 or value is undefined
        console.error('Invalid response:', response);
        return null; // You might want to return an appropriate value or throw an error
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  // Sign out
  async signOut() {
    // ...
    // clean subscriptions / local storage etc. here
    // ...

    // Navigate to sign-in
    this.router.navigateByUrl('/signin');
    sessionStorage.clear();
    localStorage.clear();
  }

  async getUser(email: string): Promise<boolean> {
    try {
      const response = await CapacitorHttp.request({
        method: 'GET',
        url: `${this.apiUrl}/UsersList?$filter=Carte eq '${email}' `,
        headers: {
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });

      if (response.status === 200 && response.data.value.length > 0) {
        // Simulate setting the user session in local storage or cookies
        console.log(JSON.stringify(response.data.value[0]));
        sessionStorage.setItem('No', JSON.stringify(response.data.value[0].No));
        sessionStorage.setItem('Main_Contact_Name', JSON.stringify(response.data.value[0].Main_Contact_Name));
        sessionStorage.setItem('Issued_Award_Points', JSON.stringify(response.data.value[0].Issued_Award_Points));
        sessionStorage.setItem('Unprocessed_Points', JSON.stringify(response.data.value[0].Unprocessed_Points));
        sessionStorage.setItem('Balance', JSON.stringify(response.data.value[0].Balance));
        sessionStorage.setItem('token', JSON.stringify(response.data.value[0]['@odata.etag']));
        sessionStorage.setItem('user', JSON.stringify(response.data.value[0]));
        sessionStorage.setItem('Carte', JSON.stringify(response.data.value[0].Carte));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  }

}
