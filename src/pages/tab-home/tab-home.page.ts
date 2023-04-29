import { ActionSheetService, ActionSheetInterface } from './../../providers/plugin-services/actionsheet.service';
import { Component } from '@angular/core';
 import { PopupType } from './../../common/enums/enums';
 import { ApiUrls } from './../../common/constants/constants';
 import { ActivatedRoute, Router } from '@angular/router';
import {  userWalletData } from '../../../src/models/mxBank.model';  
import { Platform } from '@ionic/angular';
 import { Profile } from '../../models/profile.model';

import { ToastService } from './../../providers/plugin-services/toast.service';
import { LoaderService } from './../../providers/plugin-services/loader.service';

import { ProfileService } from './../../providers/services/main-module-services/profile.service';
import { MxBankAccountService } from './../../providers/services/main-module-services/mx-bank-accounts.service';

import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab-home',
  templateUrl: 'tab-home.page.html',
  styleUrls: ['tab-home.page.scss'],
})
export class TabhomePage {
  result: any;
  sila_balance:any;
  nickname:any;

  cardsItems = [
    {
      id: 'cashIn',
      name: 'Cash In',
      icon_name: 'arrow-right',
      icon: '/assets/project-icons/arrow-right/arrow-right.png',
    },
    {
      id: 'sendMoney',
      name: 'Send Money',
      icon_name: 'dollar-coin-with-right-arrow',
      icon: '/assets/project-icons/dollar-coin-with-right-arrow/dollar-coin-with-right-arrow.png',
    },
    {
      id: 'requestMoney',
      name: 'Request Money',
      icon_name: 'money',
      icon: '/assets/project-icons/money/money.png',
    },
    {
      id: 'cashOut',
      name: 'Cash Out',
      icon_name: 'arrow-down-outline',
      icon: '/assets/project-icons/arrow-right/arrow-right.png',
    },
    {
      id: 'scanToPay',
      name: 'Scan To Pay',
      icon_name: 'arrow-down-outline',
      icon: '/assets/project-icons/arrow-right/arrow-right.png',
    },
    {
      id: 'all',
      name: 'All',
      icon_name: 'arrow-down-outline',
      icon: '/assets/project-icons/arrow-right/arrow-right.png',
    },
  ];
  walletTypes = [
    {
      title: 'Standard Wallet',
      subTitle: 'Upgrade your wallet level to enjoy higher transaction limits',
      icon: '../../assets/project-icons/group930/group930.png',
    },
    {
      title: 'Advanced Wallet',
      subTitle: 'Enjoy High transaction limits.',
      icon: '../../assets/project-icons/group932/group932.png',
    },
  ];

  userWalletData: userWalletData;


  constructor(
    public navCtrl: NavController,
    private router: Router,
    private actionSheet: ActionSheetService,
     public activatedRoute: ActivatedRoute,
     private mxBankService: MxBankAccountService,
     private toastService: ToastService,
      private loader:LoaderService
  ) {

   }

  showWalletLevelsPage(): void {
    // this.router.navigate(['/wallet-levels']);

  }


  clickSlideOption(id: string) {
    if (id === 'sendMoney') {
      // this.transferMoney();
      this.router.navigate(['/transfer-money']);

    }
  }

  // async transferMoney() {
  //   const actionSheet: ActionSheetInterface = {
  //     header: 'Cash in Method',
  //     buttons: [
  //       {
  //         text: 'At the Retails Store',
  //         data: { action: 'retail'},
  //       },
  //       {
  //         text: 'From the Bank',
  //         data: { action: 'bank'},
  //       }
  //     ]
  //   };

  //   const {data} = await this.actionSheet.create(actionSheet);
    
  //   if (data && data.action == 'retail') {
  //     this.router.navigate(['/transfer-money']);
  //   }
  //   else if (data && data.action == 'bank') {
  //   }
  // }

  async ngOnInit() {
    this.userWalletInformation();
 }

handleRefresh(event) {
 setTimeout(() => {
   // Any calls to load data go here
      this.userWalletInformation();
    event.target.complete();
 }, 2000);
};

  userWalletInformation() {     
    try {
      let userWallet:any=new userWalletData();  
      if(!!localStorage.getItem('handle') && localStorage.getItem('handle')!=''){ 
        userWallet.userHandle= localStorage.getItem('handle'); 
        this.loader.showLoading();
        this.mxBankService.userWallet(userWallet.userHandle).subscribe((resp) => { 
          this.loader.dismissLoader();         
          if (!!resp.data || resp.data.length>0) {  
               if(resp.data.walletDetail){ 
                this.sila_balance=resp.data.walletDetail.sila_balance;                
                this.nickname=resp.data.walletDetail.wallet.nickname || 'USD Wallet';

                localStorage.setItem('walletAmount',this.sila_balance);
                localStorage.setItem('nickname',this.nickname);  
              }
              
              } 
          });  
      } 
      else{
        console.log('no wallet ');
      }
    } catch (error) {
       console.log(error);
    }
       
  
        }


}
