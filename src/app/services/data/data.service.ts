import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { CapacitorHttp, HttpResponse } from '@capacitor/core';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl: string = "http://172.17.30.217:8048/BYCDEVNUP/ODataV4/Company('GRANDE%20EPICERIE%20BEN%20YAGHLANE')";
  login: string = "MOBILE";
  password: string = "Delt@S0ft";
  APILoyalty: string = "http://172.17.30.217:8048/BYCDEVNUP/ODataV4/MobileApp_recuppoint?company=GRANDE%20EPICERIE%20BEN%20YAGHLANE";
  APIPassword: string = "http://172.17.30.217:8048/BYCDEVNUP/ODataV4/MobileApp_ChangerMotDepasse?company=GRANDE%20EPICERIE%20BEN%20YAGHLANE";
  APICon: string = "http://172.17.30.217:8048/BYCDEVNUP/ODataV4/MobileApp_Connection?company=GRANDE%20EPICERIE%20BEN%20YAGHLANE";

  APIMagasin: string = "http://172.17.30.217:8048/BYCDEVNUP/ODataV4/Company('GRANDE%20EPICERIE%20BEN%20YAGHLANE')/Magasin";
  APIVilles: string = "http://172.17.30.217:8048/BYCDEVNUP/ODataV4/Company('GRANDE%20EPICERIE%20BEN%20YAGHLANE')/villes";
  chVal: String;
  choosenNumberValue: String;
  constructor() {
    // this.soap.createClient('http://192.168.1.89:3247/BYS_WS/WS/GRANDE EPICERIE BEN YAGHLANE/Codeunit/MobileApp?wsdl')
    //   .then(client => this.client = client)
    //   .catch(error => console.error('Error creating SOAP client:', error));
  }


  async getArticle(): Promise<any> {
    try {
      const response = await CapacitorHttp.request({
        method: 'GET',
        url: `${this.apiUrl}/OfferItems`,
        headers: {
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  };
  async getMagasin(): Promise<any> {
    try {
      const response = await CapacitorHttp.request({
        method: 'GET',
        url: `${this.APIMagasin}`,
        headers: {
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });

      return response.data.value;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  };
  async getVilles(gouvernorat: any): Promise<any> {
    try {
      const response = await CapacitorHttp.request({
        method: 'GET',
        url: `${this.APIVilles}?$filter=City eq '${gouvernorat}'`,
        // url: `${this.APIVilles}`,
        headers: {
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });
      return response.data.value;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  };
  async ChangePassword(Password: any): Promise<Boolean> {
    try {
      const response = await CapacitorHttp.request({
        method: 'POST',

        url: this.APIPassword, // Replace with your sign-up endpoint
        data: Password,
        headers: {
          'Content-Type': 'application/json',  // Fix the typo here
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });
      if (response.status === 200) {
        // Handle successful signup response
        console.log('Signup successful:', response.data);
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
  async Connection(Account: any): Promise<Boolean> {
    try {
      const response = await CapacitorHttp.request({
        method: 'POST',

        url: this.APICon, // Replace with your sign-up endpoint
        data: Account,
        headers: {
          'Content-Type': 'application/json',  // Fix the typo here
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });
      if (response.status === 200) {
        // Handle successful signup response
        console.log('Signup successful:', response.data);
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

 
}
