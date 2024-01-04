import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { CapacitorHttp, HttpResponse } from '@capacitor/core';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl: string = "http://192.168.1.89:3248/BYS_WS/ODataV4/Company('GRANDE%20EPICERIE%20BEN%20YAGHLANE')";
  login: string = "Ines";
  password: string = "Ines@2025";
  APILoyalty: string = "http://192.168.1.89:3248/BYS_WS/ODataV4/MobileApp_récuppoint?company=GRANDE EPICERIE BEN YAGHLANE";
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
 
}
