import { ToastService } from './../../providers/plugin-services/toast.service';
import { Favourite } from './../../models/favourite.model';
import { FavouriteService } from './../../providers/services/main-module-services/favourite.service';
import { TransactionPopup } from './../../models/transactionPopup.interface';
import { PopupType } from './../../common/enums/enums';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MxAccount } from '../../../src/models/mxBank.model';
import {
  InAppBrowser,
  InAppBrowserOptions,
} from '@ionic-native/in-app-browser/ngx';

import { Platform } from '@ionic/angular';
import { ApiUrls } from 'src/common/constants/constants';
// import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-transapopup',
  templateUrl: './transapopup.page.html',
  styleUrls: ['./transapopup.page.scss'],
})
export class TransapopupPage implements OnInit {
  popupToOpen;
  popup: TransactionPopup;
  get PopupType() {
    return PopupType;
  }
  mxAccountData;
  plaidWidgetURL;
  accountCreationMessage;
  mx_userId;
  options: InAppBrowserOptions = {
    location: 'no', //Or 'no'
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes', //Android only ,shows browser zoom controls
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only
    toolbar: 'yes', //iOS only ,
    toolbarcolor: '#dbe6e9',
    toolbarposition: 'top',
    enableViewportScale: 'no', //iOS only
    allowInlineMediaPlayback: 'no', //iOS only
    presentationstyle: 'pagesheet', //iOS only
    fullscreen: 'yes', //Windows only
    isTrusted: true,
    closebuttoncolor: '#6c2c76',
    footer: 'yes',
    footercolor: '#dbe6e9',
    // hidenavigationbuttons: 'yes',
  };
  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private _iab: InAppBrowser,
    public platform: Platform,
    private toastService: ToastService,
    private favService: FavouriteService
  ) {}

  ngOnInit() {
    this.popupToOpen = this.activatedRoute.snapshot.params['popupType'];

    switch (this.popupToOpen) {
      case PopupType.TRANSACTION:
        break;
      case PopupType.SEND_MONEY:
        break;
      case PopupType.TRANSFER:
        break;
      case PopupType.CASH_OUT_TRANSFER:
        break;
      case PopupType.CARD_EDIT:
        break;
      case PopupType.MX_ACCOUNT:
        this.accountCreationMessage =
          this.activatedRoute.snapshot.params['message'];
        break;
      default:
        break;
    }
  }

  addToFav() {
    const fav = this.activatedRoute.snapshot.params['addToFav'];
    this.favService.add(JSON.parse(fav)).subscribe((resp) => {
      if (resp.status == 200 && !resp.data.error) {
        this.router.navigate(['/tabs/tab-home']);
      }
      this.toastService.showToast(resp.data.message);
    });
  }

  public openWithInAppBrowser(url: string) {
    let target = '_blank'; 
    // let target = "_self";
    let openURLInApp = this._iab.create(url, target, this.options);
    openURLInApp.insertCSS({ code: 'body{font-size: 25px;}' }); 
    // let insppClose:any=openURLInApp.close(); 
    //   if(insppClose){
    //     this.router.navigate(['/payment-method']);  
    // }
  //   openURLInApp.on('exit').subscribe(event => {
  //     console.log("inAppBrowser is closed now");
  //     this.router.navigate(['/payment-method']); 
  //     // your action here when close inAppBrowser
  //   }, err => {
  //     console.error(err);
  // });

  }

  linkBankAccount() {
    let handle: any;

    if (
      !!localStorage.getItem('handle') &&
      localStorage.getItem('handle') != ''
    ) {
      handle = localStorage.getItem('handle');
    }
    let plaidWidgetURL: any = ApiUrls.plaidWidgetURL + handle;
    this.platform.ready().then(() => {
      this.openWithInAppBrowser(plaidWidgetURL);
    });
  }

  handleClick() {
    // this.router.navigate(['/enter-mobile-number']);
  }

  backToHome() {
    this.router.navigate(['/tabs/tab-home']);
  }

  skipAccountLink() {
    this.backToHome();
  }

  cancelClicked() {
    this.backToHome();
  }

  ngOnDestroy() {}
}
