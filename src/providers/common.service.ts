import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class CommonService {
  constructor(private toastCtrl: ToastController) {}

  async showToast(msg = "") {
    let toast = await this.toastCtrl.create({
      message: msg || 'Enter valid otp',
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }
}
