import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { PushNotifications } from '@capacitor/push-notifications';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  content_loaded: boolean = false;

  constructor(service: DataService) {
  }

  ngOnInit() {
    this.addListeners()

    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }
  addListeners = async () => {
    await PushNotifications.addListener('registration', token => {
      alert('Registration token' + token.value)
    });
    await PushNotifications.addListener('registrationError', err => {
      alert('Registration error' + err.error);
    });
    await PushNotifications.addListener('pushNotificationReceived', notification => {
      alert('Push notification recieved:' + JSON.stringify(notification));
    });
    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      alert('Push notification action performed:' + notification.actionId + notification);
    });
  }
  async registerPushNotification() {
    let permStatus = await PushNotifications.checkPermissions();
    alert(JSON.stringify(permStatus));
    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }
    if (permStatus.receive !== 'granted') {
      alert('User denied permission');
    }
    if (permStatus.receive === 'granted') {
      try {
        await PushNotifications.register();
      } catch (e) { alert(JSON.stringify(e)) }
    }

  }
  getDeliveredNotifications = async () = {
    const notificationList = await PushNotifications.getDeliveredNotifications{
alert('delivered ')
}
}
}
