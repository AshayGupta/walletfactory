import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable()
export class AlertService {

  private alert: any;

  constructor(private alertCtrl: AlertController) {
    console.log('AlertService');
  }

  // public Alert = {
  //   confirm: (msg: string, title?: string, cancelText?: string, successText?: string, cssBody?: string) => {
  //     return new Promise((resolve, reject) => {
  //       this.alert = this.alertCtrl.create({
  //         title: title,
  //         message: msg,
  //         cssClass: cssBody,
  //         buttons: [
  //           {
  //             text: cancelText,
  //             role: 'cancel',
  //             cssClass: 'alertDanger',
  //             handler: () => {
  //               reject(false);
  //             }
  //           },
  //           {
  //             text: successText,
  //             cssClass: 'alertSuccess',
  //             handler: () => {
  //               resolve(true);
  //             }
  //           }
  //         ]
  //       });
  //       this.alert.present();
  //     });

  //   },
  //   alert: (msg: string, title?: string, successText?: string, cssBody?: string) => {
  //     return new Promise((resolve, reject) => {
  //       this.alert = this.alertCtrl.create({
  //         title: title,
  //         message: msg,
  //         cssClass: cssBody,
  //         buttons: [
  //           {
  //             text: successText || 'OK',
  //             handler: () => {
  //               resolve(true);
  //             }
  //           }
  //         ]
  //       });
  //       this.alert.present();
  //     });
  //   }
  // }

  public AlertWith3Btn = {
    confirm: (msg: string, title?: string, cancelText?: string, successText?: string, cssBody?: string, bodyBtnTxt?: string) => {
      return new Promise((resolve, reject) => {
        this.alert = this.alertCtrl.create({
          message: msg,
          cssClass: cssBody,
          buttons: [
            {
              text: bodyBtnTxt,
              cssClass: 'termCondition',
              handler: () => {
                resolve('tnc');
              }
            },
            {
              text: cancelText,
              role: 'cancel',
              cssClass: 'alertDanger',
              handler: () => {
                reject(false);
              }
            },
            {
              text: successText,
              cssClass: 'alertSuccess',
              handler: () => {
                resolve(true);
              }
            }
          ]
        });
        this.alert.present();
      });
    }
  }


  dismissAlert() {
    this.alert.dismiss();
  }

}
