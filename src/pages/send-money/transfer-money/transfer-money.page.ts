import { FavouriteListPage } from './../../favourite-list/favourite-list.page';
import { LoaderService } from './../../../providers/plugin-services/loader.service';
import { SendMoney } from './../../../models/sendMoney.model';
import { SendMoneyService } from './../../../providers/services/main-module-services/send-money.service';
import { ContactsListPage } from './../contacts-list/contacts-list.page';
import { Favourite } from './../../../models/favourite.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopupType } from 'src/common/enums/enums';
import { ModalCtrlInterface, ModalCtrlService } from 'src/providers/plugin-services/modal-ctrl.service';
import { ChangeDetectorRef } from '@angular/core';




@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.page.html',
  styleUrls: ['./transfer-money.page.scss'],
})
export class TransferMoneyPage {
  walletAmount:any;
  feesCharge:any='0.35';
  public transfer: SendMoney = {
    amount: "",
    sendTo: "",
    note: ""
  };

  constructor(
    private router: Router,
    private modalCtrl: ModalCtrlService,
    private loader: LoaderService,
    private sendMoneyService: SendMoneyService,
    private cdRef:ChangeDetectorRef
 
  ) { 

    this.walletAmount=localStorage.getItem('walletAmount');
    
  }

  async handleContacts() {
    const modal: ModalCtrlInterface = {
      pageName: ContactsListPage
    };
    this.transfer.sendTo = await this.modalCtrl.create(modal) || "";
  }

  onConfirm() {
    if(!this.transfer.amount || !this.transfer.sendTo) return;

    
    const fav: Favourite = {
      sourceHandle: localStorage.getItem('handle'),
      destinationHandle: this.transfer.sendTo,
      amount: this.transfer.amount,
      note: this.transfer.note
    };
    
     this.sendMoneyService.send(fav).subscribe(res => {
      this.loader.dismissLoader(); 
      if(res.status == 200 && !res.data.error) {

        this.router.navigate(['/transapopup', { sendMoneyMessage:res.data.linkResponse.message,popupType: PopupType.SEND_MONEY, addToFav: JSON.stringify(fav)}]);
      }
    });
  }

  change(value){
    //manually launch change detection
    this.cdRef.detectChanges();
    this.transfer.amount = value.length < 6 ? value.substring(0,6) : value; 
  }

  async favoritesList() {
    const modal: ModalCtrlInterface = {
      pageName: FavouriteListPage
    };
    await this.modalCtrl.create(modal) || "";
  }

    // showFavourites() {
  //   this.router.navigate(['/favourite-list']);
  // }

}
