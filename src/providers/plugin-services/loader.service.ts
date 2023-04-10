import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Injectable()
export class LoaderService {

     private count: number = 0;
     loading;
    constructor(private loadingCtrl: LoadingController) {
        console.log('LoaderService');
    }

    async showLoading() {
        this.count++;
        if (this.count == 1) {
        this.loading = await this.loadingCtrl.create({
          message: 'Loading....',
          duration: 180000,
        });    
        this.loading.present();
        }
      }

      dismissLoader() {
        this.count--;
        if (this.count == 0) {
            this.loading.dismiss();
        }
    }

    // showLoader(msg?: string) {
    //     this.count++;
    //     if (this.count == 1) {
    //         this.loading = this.loadingCtrl.create({
    //             duration: 180000
    //         });

    //         // this.loading.onDidDismiss((data) => {
    //         //     this.count = 0;
    //         // });
    //         this.loading.present();
    //     }
    // }

   

}
