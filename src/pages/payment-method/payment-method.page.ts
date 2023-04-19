import { TransactionPopup } from './../../models/transactionPopup.interface';
import { PopupType } from './../../common/enums/enums';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MxAccount,MXBankList } from '../../../src/models/mxBank.model';  
import { Platform } from '@ionic/angular';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx'; 
import { Profile } from '../../models/profile.model';

import { ToastService } from './../../providers/plugin-services/toast.service';
import { LoaderService } from './../../providers/plugin-services/loader.service';

import { ProfileService } from './../../providers/services/main-module-services/profile.service';
import { MxBankAccountService } from './../../providers/services/main-module-services/mx-bank-accounts.service';

import { NavController } from '@ionic/angular';

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
  mx_redirecturl:any='http://cashdrop.v3ainfo.com/api/mx-linkbank-callback';
window:any;
  constructor(    
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private _iab: InAppBrowser,
    public platform: Platform,
    private profileService: ProfileService,
    private mxBankService: MxBankAccountService,
    public navCtrl: NavController,
    private toastService: ToastService,
    private loader:LoaderService) {

      this.guid=localStorage.getItem('guid'); 
     
      this.getUserMXBankList(); 
    }

  banksList = [
    { id: 1, name: "Bank of America", icon: "../../assets/project-icons/bank/bank.png" },
    { id: 2, name: "City Bank", icon: "../../assets/project-icons/bank/bank.png" }
  ];

  selectBank(bank) {
    console.log(bank);
  }


  async ngOnInit() {
    setTimeout(() => {
      this.getUserMXBankList(); 
    }, 500);
    this.getMXWidgetURL();
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      setTimeout(() => {
        this.getUserMXBankList(); 
      }, 500);
      this.getMXWidgetURL();

 

      event.target.complete();
    }, 2000);
  };


  getMXWidgetURL() { 
    
        let mxAccountData:any=new MxAccount();  
        mxAccountData.guid= this.guid; 
         this.loader.showLoading();
        this.mxBankService.mxCreateAccount(mxAccountData).subscribe((resp) => {       
          const mxAccoutData: MxAccount = resp.data;   
          this.loader.dismissLoader();              
          if (!mxAccoutData.error) { 
            this.widgetUrl=mxAccoutData.widgetUrl; 
          } 
         });
      } 

     
      getUserMXBankList() { 
    
      let mxBanKlList:any=new MXBankList();  
      if(!!localStorage.getItem('member_guid') && localStorage.getItem('member_guid')!=''){ 
        mxBanKlList.memberGuid= localStorage.getItem('member_guid');
        mxBanKlList.userHandle= localStorage.getItem('handle'); 
        this.loader.showLoading();
        this.mxBankService.mxBankList(mxBanKlList).subscribe((resp) => { 
          console.log('resp',JSON.stringify(resp));      
          const mxBanKlList: MXBankList = resp.data;   
          this.loader.dismissLoader();              
          if (!mxBanKlList.error) { 
            console.log('mxBanKlList',JSON.stringify(mxBanKlList));

            localStorage.setItem('member_guid','');

           } 
        });  
      } 
      else{
        console.log('no member guid ');
      }

      }
 
  linkBankAccount(){ 
    if(!!this.widgetUrl && this.widgetUrl!=undefined){
      this.router.navigate(['/mxaccount', {  widgetUrl: this.widgetUrl}]);   
    }

      //  this.connectMXWIdget(); 
 
 
    const options: InAppBrowserOptions = {
      location: 'no',
      zoom: 'no',
      toolbar: 'no',
      closebuttoncaption: 'close',
      clearcache: 'yes',
      // clearsessioncache: 'yes',
      // toolbarcolor: "#488aff",
      // hideurlbar: "yes",
      // closebuttoncolor: "#fff",
      // navigationbuttoncolor: "#fff"
     };    
    
    //    this.platform.ready().then( () => { 
    //     if(!!this.widgetUrl){
    //       const linkBankAccount : any = this._iab.create(this.widgetUrl, '_self', options);      
    //     }        
    //  }) 
//---------------------------------------------------------
//   if(!!this.widgetUrl){
// let linkBankAccount = (window as any).open(this.widgetUrl, '_blank', 'location=no,toolbar=no,hidden=yes');
 
// linkBankAccount.addEventListener('load', function(){
//    linkBankAccount.show();
// });
//  }


  }

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
