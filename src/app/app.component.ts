import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { FcmService } from '../app/services/notification/notif.service'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

})
export class AppComponent {

  constructor(
    private fcm: FcmService,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.fcm.initPush();
    }).catch(e => {
      console.log('error fcm: ', e);
    });

    this.initializeApp();
  }

  // Initialize app
  initializeApp() {

    // Wait until platform is ready
    this.platform.ready().then(async () => {

      // If we're on a mobile platform (iOS / Android), not web
      if (Capacitor.getPlatform() !== 'web') {

        // Set StatusBar style (dark / light)
        // await StatusBar.setStyle({ style: Style.Dark });
      }

      // ...
      // do some more config and setup if necessary
      // ...

      // Fake timeout since we do not load any data
      setTimeout(async () => {
        // Hide SplashScreen
        await SplashScreen.hide();
      }, 2000);
    });
  }
}
