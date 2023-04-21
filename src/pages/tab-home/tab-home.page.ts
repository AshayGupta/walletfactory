import { PopupType } from './../../common/enums/enums';
import { Component,OnInit,ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-tab-home',
  templateUrl: 'tab-home.page.html',
  styleUrls: ['tab-home.page.scss']
})
export class TabhomePage {
  result: any;
 
  cardsItems = [
    {"id":1,"name":"Cash In","icon-name":"arrow-right","icon":"/assets/project-icons/arrow-right/arrow-right.png"},
    {"id":2,"name":"Send Money","icon-name":"dollar-coin-with-right-arrow","icon":"/assets/project-icons/dollar-coin-with-right-arrow/dollar-coin-with-right-arrow.png"},
    {"id":3,"name":"Request Money","icon-name":"money","icon":"/assets/project-icons/money/money.png"},
    {"id":4,"name":"Cash Out","icon-name":"arrow-down-outline","icon":"/assets/project-icons/arrow-right/arrow-right.png"},
    {"id":5,"name":"Scan To Pay","icon-name":"arrow-down-outline","icon":"/assets/project-icons/arrow-right/arrow-right.png"},
    {"id":6,"name":"All","icon-name":"arrow-down-outline","icon":"/assets/project-icons/arrow-right/arrow-right.png"}
  ];
  walletTypes = [
    { title: "Standard Wallet", subTitle: "Upgrade your wallet level to enjoy higher transaction limits", icon: "../../assets/project-icons/group930/group930.png" },
    { title: "Advanced Wallet", subTitle: "Enjoy High transaction limits.", icon: "../../assets/project-icons/group932/group932.png" }
  ];

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private actionSheetCtrl: ActionSheetController
  ) {}

  goToClickOption(id:any):void{
    console.log(id);
    this.presentActionSheet();
   }

  showWalletLevelsPage(): void {
    console.log('show wallet level page'); 
    this.router.navigate(['/wallet-levels']);

 }

 async presentActionSheet() {
  const actionSheet = await this.actionSheetCtrl.create({
    header: 'Cash in Method',
    subHeader: '',
    buttons: [
      {
        text: 'At the Retails Store',
        data: {
          action: 'retail',
        },
      },
      {
        text: 'From the Bank',
        data: {
          action: 'bank',
        },
      },
    ],
  });

  await actionSheet.present();

  const result = await actionSheet.onDidDismiss();
  if(result.data.action === 'retail') {
    this.router.navigate(['/transfer-money']);
  }
  else if(result.data.action === 'bank') {

  }
}
//  async presentActionSheet() {
//   const actionSheet = await this.actionSheetCtrl.create({
//     header: 'Cash in Method',
//     subHeader: '',
//     buttons: [
//       {
//         text: 'At the Retails Store',
//         role: 'destructive',
//         data: {
//           action: 'share',
//         },
//       },
//       {
//         text: 'From the Bank',
//         data: {
//           action: 'share',
//         },
//       },
     
//     ],
//   });

//   await actionSheet.present();

//   const result = await actionSheet.onDidDismiss();
//   this.result = JSON.stringify(result, null, 2);
// }

addFav() {
  this.router.navigate(['/transapopup', {popupType: PopupType.SEND_MONEY}]);
}

showFav() {
  this.router.navigate(['/favourite-list']);
}

}
