import { ActionSheetService, ActionSheetInterface } from './../../providers/plugin-services/actionsheet.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-home',
  templateUrl: 'tab-home.page.html',
  styleUrls: ['tab-home.page.scss'],
})
export class TabhomePage {
  result: any;

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

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private actionSheet: ActionSheetService
  ) {}

  showWalletLevelsPage(): void {
    this.router.navigate(['/wallet-levels']);
  }


  clickSlideOption(id: string) {
    if (id === 'sendMoney') {
      this.transferMoney();
    }
  }

  async transferMoney() {
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
      this.router.navigate(['/transfer-money']);
    }
    else if (data && data.action == 'bank') {
    }
  }

}
