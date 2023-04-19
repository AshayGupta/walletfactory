import { TransactionPopup } from './../../models/transactionPopup.interface';
import { PopupType } from './../../common/enums/enums';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
  import { MxAccount } from '../../../src/models/mxBank.model';  

 import { Platform } from '@ionic/angular';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-transapopup',
  templateUrl: './transapopup.page.html',
  styleUrls: ['./transapopup.page.scss'],
})
export class TransapopupPage implements OnInit {

  popupToOpen;
  popup: TransactionPopup;
  get PopupType() { return PopupType; }
  mxAccountData;
  widgetUrl;
  mxAccountMessage; 
  mx_userId;

  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private _iab: InAppBrowser,
    public platform: Platform
  ) { }

  ngOnInit() {
    this.popupToOpen = this.activatedRoute.snapshot.params['popupType']; 
    if(this.popupToOpen=="5"){ 
      this.mxAccountData =  this.activatedRoute.snapshot.params['mxAccoutData'];
      this.widgetUrl=this.activatedRoute.snapshot.params['widgetUrl']; 
      this.mxAccountMessage= 'MX Account Created';
      this.mx_userId=this.activatedRoute.snapshot.params['mx_userId'];  
    }
  }

  handleClick() {
    // this.router.navigate(['/enter-mobile-number']);
  }

  cancelClicked() {

  }
  
  backToHome() {
    this.router.navigate(['/tabs/tab-home']);
  }

  addToFav() {
    
  }

  skipAccountLink() {
    this.router.navigate(['/tabs/tab-home']);
  }
  linkBankAccount(){
    // this.router.navigate(['/mx-account',this.widgetUrl]);  
    // const options: InAppBrowserOptions = {
    //   toolbar: 'no',
    //   location: 'no',
    //   zoom: 'no'
    // }

    const options: InAppBrowserOptions = {
      location: 'no',
      clearcache: 'yes',
      zoom: 'no',
      toolbar: 'yes',
      closebuttoncaption: 'close',
      clearsessioncache: 'yes',
      toolbarcolor: "#488aff",
      hideurlbar: "yes",
      closebuttoncolor: "#fff",
      navigationbuttoncolor: "#fff"
     };    
    
       this.platform.ready().then( () => { 
        const linkBankAccount : any = this._iab.create(this.widgetUrl, '_blank', options);       
        
     })
  }

  ngOnDestroy() {
    this.mxAccountData.unsubscribe(); 
  }

}
