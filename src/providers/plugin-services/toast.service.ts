import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastService {
  constructor(private toastCtrl: ToastController) {}

  async showToast(msg = "") {
    let toast = await this.toastCtrl.create({
      message: msg || 'Error occured',
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
