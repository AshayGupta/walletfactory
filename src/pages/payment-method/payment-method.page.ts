import { TransactionPopup } from './../../models/transactionPopup.interface';
import { PopupType } from './../../common/enums/enums';
import { InAppbrowserClass } from './../../common/inAppBrowser/inAppBrowser';
import { ApiUrls } from './../../common/constants/constants';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MxAccount,MXBankList,userBankAccountData } from '../../../src/models/mxBank.model';  
import { Platform } from '@ionic/angular';
 import { Profile } from '../../models/profile.model';

import { ToastService } from './../../providers/plugin-services/toast.service';
import { LoaderService } from './../../providers/plugin-services/loader.service';

import { ProfileService } from './../../providers/services/main-module-services/profile.service';
import { MxBankAccountService } from './../../providers/services/main-module-services/mx-bank-accounts.service';

import { NavController } from '@ionic/angular';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

   @Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],  
})
export class PaymentMethodPage {
mxAccountData;
widgetUrl;
mxAccountMessage; 
mx_userId;
profile: Profile;
guid:any;
 window:any;
userAccountListData:any;
bankIcon='../assets/project-icons/bank/bank.png';

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
     public platform: Platform,
    private profileService: ProfileService,
    private mxBankService: MxBankAccountService,
    public navCtrl: NavController,
    private toastService: ToastService,
    private _iab: InAppBrowser,
     private loader:LoaderService) {

      this.guid=localStorage.getItem('guid'); 

      this.userAccountInformation();
     
     }


  selectBank(bank) {
    console.log(bank);
  }


  async ngOnInit() {
       this.userAccountInformation();
    }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
         this.userAccountInformation();
       event.target.complete();
    }, 2000);
  };

////////////

linkBankAccount(){ 
  let handle:any;

   if(!!localStorage.getItem('handle') && localStorage.getItem('handle')!=''){ 
        handle = localStorage.getItem('handle'); 
   } 
  let plaidWidgetURL:any=ApiUrls.plaidWidgetURL+handle; 
   this.platform.ready().then( () => { 
      if(!!ApiUrls.plaidWidgetURL){         
        this.openWithInAppBrowser(plaidWidgetURL);     
       }         
   }) 

  }

 
   public openWithInAppBrowser(url : string){
    let target = "_blank";
    // let target = "_self"; 
    
    let openURLInApp=this._iab.create(url,target,this.options);   
    openURLInApp.insertCSS({ code: "body{font-size: 25px;}" });
      
    // openURLInApp.on('exit').subscribe(event => { 
    //   console.log("inAppBrowser is closed now");  
    //    // your action here when close inAppBrowser
    //   }, err => {
    //     console.error(err);
    // });

}


userAccountInformation() {     
  try {
    let userAccountListData:any=new userBankAccountData();  
    if(!!localStorage.getItem('handle') && localStorage.getItem('handle')!=''){ 
      userAccountListData.userHandle= localStorage.getItem('handle'); 
      this.loader.showLoading();
      this.mxBankService.userAccountList(userAccountListData.userHandle).subscribe((resp) => { 
        this.loader.dismissLoader();         
        if (!!resp.data || resp.data.length>0) {  
            this.userAccountListData=resp.data;  
           } 
        });  
    } 
    else{
      console.log('no member guid ');
    }
  } catch (error) {
     console.log(error);
  }
     

      }
 

  //////////////////////// MX Account Code ///////////////////////////

  // getMXWidgetURL() { 
    
  //       let mxAccountData:any=new MxAccount();  
  //       mxAccountData.guid= this.guid; 
  //        this.loader.showLoading();
  //       this.mxBankService.mxCreateAccount(mxAccountData).subscribe((resp) => {       
  //         const mxAccoutData: MxAccount = resp.data;   
  //         this.loader.dismissLoader();              
  //         if (!mxAccoutData.error) { 
  //           this.widgetUrl=mxAccoutData.widgetUrl; 
  //         } 
  //        });
  //     } 

     
      // plaidWidgetBankList() { 
    
      // let plaidWidgetBankData:any=new plaidWidgetData();  
      // if(!!localStorage.getItem('member_guid') && localStorage.getItem('member_guid')!=''){ 
      //   plaidWidgetBankData.handle= localStorage.getItem('handle'); 
      //   this.loader.showLoading();
      //   this.mxBankService.plaidWidgetList(plaidWidgetBankData).subscribe((resp) => { 
      //     console.log('resp',JSON.stringify(resp));      
      //     const plaidWidgetBankData: plaidWidgetData = resp.data;   
      //     this.loader.dismissLoader();              
      //     if (!plaidWidgetBankData.error) { 
      //       console.log('plaidWidgetBankData',JSON.stringify(plaidWidgetBankData)); 
 
      //      } 
      //   });  
      // } 
      // else{
      //   console.log('no member guid ');
      // }

      // }
 

//---------------------------------------------------------
//   if(!!this.widgetUrl){
// let linkBankAccount = (window as any).open(this.widgetUrl, '_blank', 'location=no,toolbar=no,hidden=yes');
 
// linkBankAccount.addEventListener('load', function(){
//    linkBankAccount.show();
// });
//  }




  // connectMXWIdget(){
  //   let tempRouter = this.router;
  //   let tempiab=this._iab;
  //   let global=(window) as any;
  //   var Url = this.widgetUrl;
  //   // global.open(Url, "_self");  
  //   global.location.href=Url;  

  //   global.addEventListener('message', function (event) {
  // try { 
  // const data = JSON.parse(event.data);      
  // if (data.moneyDesktop) {
  // console.log('versions null -> 3', data);
  // }
  // } catch (error) {
  
  // if (event.data.mx) {
  //     console.log('version 4 message data', event.data);
  //     console.log('hello type', event.data.type);
  //     console.log('metadata',event.data.metadata);
   
  //   if(event.data.type==='mx/connect/memberConnected'){ 
  //       //  this.location.href='http://localhost:8100/tabs/tab-home';
  //       tempRouter.navigate(['/tabs/tab-home']);  
  //      }
  //   }
  // }
  // });
  
  // }
   


}
