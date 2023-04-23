import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

export interface ModalCtrlInterface {
  pageName: any;
  data?: any;
}

@Injectable()
export class ModalCtrlService {

  constructor(private modalCtrl: ModalController) {}

  async create(opts: ModalCtrlInterface) {
    const modal = await this.modalCtrl.create({
        component: opts.pageName,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
        return data;
    }
  }

  async dismiss(result = null) {
    if (result) {
      return this.modalCtrl.dismiss(result, 'confirm');
    }
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
