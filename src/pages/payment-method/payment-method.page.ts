import { TransactionPopup } from './../../models/transactionPopup.interface';
import { PopupType } from './../../common/enums/enums';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MxAccount } from '../../../src/models/profile.model';  
import { Platform } from '@ionic/angular';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx'; 
import { Profile } from '../../models/profile.model';

import { ToastService } from './../../providers/plugin-services/toast.service';
import { ProfileService } from './../../providers/services/main-module-services/profile.service';
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

  constructor(    
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private _iab: InAppBrowser,
    public platform: Platform,
    private profileService: ProfileService,
    public navCtrl: NavController,
    private toastService: ToastService) {

      this.guid=localStorage.getItem('guid'); 
    }

  banksList = [
    { id: 1, name: "Bank of America", icon: "../../assets/project-icons/bank/bank.png" },
    { id: 2, name: "City Bank", icon: "../../assets/project-icons/bank/bank.png" }
  ];

  selectBank(bank) {
    console.log(bank);
  }

  addBank() {
    // this.router.navigate(['/add-account']);
  }

  ngOnInit() {
    this.getMXWidgetURL();
  }

  getMXWidgetURL() {
    
        let mxAccountData:any=new MxAccount();  
        mxAccountData.guid= this.guid; 
        // mxAccountData.mx_redirecturl=this.mx_redirecturl;  
        this.profileService.mxCreateAccount(mxAccountData).subscribe((resp) => {  
          const mxAccoutData: MxAccount = resp.data;              
          if (!mxAccoutData.error) { 
            this.widgetUrl=mxAccoutData.widgetUrl; 
          } 
         });
      } 

  linkBankAccount(){ 
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
        if(!!this.widgetUrl){
          const linkBankAccount : any = this._iab.create(this.widgetUrl, '_blank', options);      
        }        
     })
  }


}
