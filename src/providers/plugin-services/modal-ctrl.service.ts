import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable()
export class ModalCtrlService {

  private modal;

  constructor(private modalCtrl: ModalController) {}

  async openModal(pageName, params?) {
    this.modal = await this.modalCtrl.create({
        component: pageName,
    });
    this.modal.present();

    const { data, role } = await this.modal.onWillDismiss();

    if (role === 'confirm') {
        return data;
    }
  }

  async dismissModal(result = null) {
    if (result) {
        return this.modalCtrl.dismiss(result, 'confirm');
    }
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
