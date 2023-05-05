import {
  ActionSheetService,
  ActionSheetInterface,
} from './../../providers/plugin-services/actionsheet.service';
import { Component } from '@angular/core';
import { PopupType } from './../../common/enums/enums';
import { ApiUrls } from './../../common/constants/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { userWalletData } from '../../../src/models/mxBank.model';
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

  userWalletData: userWalletData = new userWalletData();
  sila_balance:any;
   nickname:any;
  constructor(
    public navCtrl: NavController,
    private router: Router,
    private actionSheet: ActionSheetService,
    public activatedRoute: ActivatedRoute,
    private mxBankService: MxBankAccountService,
    private profileService: ProfileService,
    private toastService: ToastService,
    private loader: LoaderService
  ) {

    this.userWalletInformation();
    this.getUserProfile();

  }

  async ngOnInit() {
    this.userWalletInformation();
    this.getUserProfile();
  }

  getUserProfile() {
    let userHandle :any = localStorage.getItem('handle');
    if (userHandle) { 
    // let profileData=new Profile;
    // profileData.userHandle=userHandle;
    this.loader.showLoading();
    this.profileService
      .getUserProfile(userHandle)
      .subscribe((resp) => {
        this.loader.dismissLoader();
        if (resp.status == 200 && resp.data) {
          const profile: Profile = resp.data;
          localStorage.setItem('fullName', resp.data.userinfo.name + ' ' + resp.data.userinfo.lname);
          localStorage.setItem('userInfo', JSON.stringify(resp.data.userinfo));
        }
      });
    }
  } 

  showWalletLevelsPage(): void {
    // this.router.navigate(['/wallet-levels']);
  }

  clickSlideOption(id: string) {
    if (id === 'sendMoney') {
      // this.transferMoney();
      this.router.navigate(['/transfer-money']);
    }
    else if(id === 'cashIn') {
      // this.showActionSheet(id);
      this.router.navigate(['/cash-in-transfer-money',{slideId:id}]);

    }
    else if(id === 'cashOut') {
      // this.showActionSheet(id);
      this.router.navigate(['/cash-in-transfer-money',{slideId:id}]);

    }
  }

  async showActionSheet(id: string) {
    const actionSheet: ActionSheetInterface = {
      header: 'Cash in Method',
      buttons: [
        {
          text: 'At the Retails Store',
          data: { action: 'retail'},
        },
        {
          text: 'From the Bank',
          data: { action: 'bank'},
        }
      ]
    };

    const {data} = await this.actionSheet.create(actionSheet);

    if (data && data.action == 'retail') {
    }
    else if (data && data.action == 'bank') {
      switch (id) {
        case 'cashIn':
          this.router.navigateByUrl('/how-to-cash-in');
          break;
        case 'cashOut':
          break;
        default:
          break;
      }
    }
  }

  userWalletInformation() {
    try {
      let handle = localStorage.getItem('handle');    

      if (handle) {
        this.loader.showLoading();
        this.mxBankService.userWallet(handle).subscribe((resp) => {
          if (resp.data) {
            if (resp.data.walletDetail) {
              let walletDetail :any = resp.data.walletDetail;
              this.sila_balance = walletDetail.sila_balance || '0';
              this.nickname = walletDetail.wallet?.nickname || 'USD Wallet';

              localStorage.setItem('walletAmount', this.sila_balance);
              localStorage.setItem('nickname', this.nickname);
            }
          }
          this.loader.dismissLoader();
        });
      } else {
        console.log('no wallet ');
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.userWalletInformation();
      event.target.complete();
    }, 2000);
  }

}
