import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class LoaderService {

    private loading: Loading;
    private count: number = 0;

    constructor(private loadingCtrl: LoadingController) {
        console.log('LoaderService');
    }

    showLoader(msg?: string) {
        this.count++;
        if (this.count == 1) {
            this.loading = this.loadingCtrl.create({
                duration: 180000
            });

            // this.loading.onDidDismiss((data) => {
            //     this.count = 0;
            // });
            this.loading.present();
        }
    }

    dismissLoader() {
        this.count--;
        if (this.count == 0) {
            this.loading.dismiss();
        }
    }

}
