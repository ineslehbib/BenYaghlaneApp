import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiUrl: string = "http://192.168.1.89:3248/BYS_WS/ODataV4/Company('GRANDE%20EPICERIE%20BEN%20YAGHLANE')";
  login: string = "Ines";
  password: string = "Ines@2025";
  APICreation: string = "http://192.168.1.89:3248/BYS_WS/ODataV4/MobileApp_AccountInsertFromJson?company=GRANDE EPICERIE BEN YAGHLANE";
  APILoyalty: string = "http://192.168.1.89:3248/BYS_WS/ODataV4/MobileApp_récuppoint?company=GRANDE EPICERIE BEN YAGHLANE";
  constructor(
    private router: Router
  ) { }

  // Get user session
  async getSession() {
    // ...
    // put auth session here
    // ...

    // Sample only - remove this after real authentication / session
    let session = {
      email: 'john.doe@mail.com'
    }

    return false;
    // return session;
  }// Sign in
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
  // Sign in
  async signIn(email: string, password: string): Promise<boolean> {
    try {
      const response = await CapacitorHttp.request({
        method: 'GET',
        url: `${this.apiUrl}/UsersList?$filter=No eq '${email}' and Password eq '${password}'`,
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
        this.setSession(response.data.value);
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
  // Sign out
  async signOut() {
    // ...
    // clean subscriptions / local storage etc. here
    // ...

    // Navigate to sign-in
    this.router.navigateByUrl('/signin');
    localStorage.delete();
  }
}
