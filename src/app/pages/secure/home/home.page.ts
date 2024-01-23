import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { PushNotifications } from '@capacitor/push-notifications';
import { json } from 'stream/consumers';
import { Platform } from '@ionic/angular';
import { FcmService } from 'src/app/services/notification/notif.service';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  content_loaded: boolean = false;

  constructor(private Data: DataService, private fcm: FcmService,
    private platform: Platform) {
  }
  Account: any; 
  ngOnInit() {
    setTimeout(() => {
      var userData = {
        inputJson: JSON.stringify({
          CompteNo: sessionStorage.getItem('No').replace(/"/g, ''),
          ContactNo: sessionStorage.getItem('Contact').replace(/"/g, ''),
        }),
      };

      // Add your logic here to update the password
      // this.Data.Connection(userData).then((success) => {
      //   if (success) {
      //     // Display a message if the password change is successful
      //     console.log("Changed");
      //   } else {
      //     // Display an error message if the password change fails
      //     console.error('Error');
      //   }
      // });
    }, 2000); // Delay of 2000 milliseconds (2 seconds)

  }

} 

