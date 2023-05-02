import { Injectable } from '@angular/core';
import { AlertController, AlertOptions } from '@ionic/angular';

@Injectable()
export class AlertService {

  constructor(private alertCtrl: AlertController) {
    console.log('AlertService');
  }

  async confirm(opts: AlertOptions) {
    const alert = await this.alertCtrl.create({
      header: opts.header,
      subHeader: opts.subHeader,
      message: opts.message,
      buttons: opts.buttons,
    });

    await alert.present();
  }

  dismissAlert() {
    this.alertCtrl.dismiss();
  }

}
