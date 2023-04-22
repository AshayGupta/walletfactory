import { LoaderService } from './../../../providers/plugin-services/loader.service';
import { SendMoney } from './../../../models/sendMoney.model';
import { SendMoneyService } from './../../../providers/services/main-module-services/send-money.service';
import { ContactsListPage } from './../contacts-list/contacts-list.page';
import { Favourite } from './../../../models/favourite.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopupType } from 'src/common/enums/enums';
import { ModalCtrlService } from 'src/providers/plugin-services/modal-ctrl.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.page.html',
  styleUrls: ['./transfer-money.page.scss'],
})
export class TransferMoneyPage {

  public transfer: SendMoney = {
    amount: "500",
    sendTo: "",
    note: ""
  };

  constructor(
    private router: Router,
    private modalCtrl: ModalCtrlService,
    private loader: LoaderService,
    private sendMoneyService: SendMoneyService
  ) { }

  async handleContacts() {
    this.transfer.sendTo = await this.modalCtrl.openModal(ContactsListPage) || "";
  }

  showFavourites() {
    this.router.navigate(['/favourite-list']);
  }

  onConfirm() {
    if(!this.transfer.amount || !this.transfer.sendTo) return;

    const fav: Favourite = {
      sourceHandle: localStorage.getItem('handle'),
      destinationHandle: this.transfer.sendTo,
      amount: this.transfer.amount
    };

    this.loader.dismissLoader();
    this.sendMoneyService.send(fav).subscribe(res => {
      if(res.status == 200 && !res.data.error) {
        this.router.navigate(['/transapopup', { popupType: PopupType.SEND_MONEY, addToFav: JSON.stringify(fav)}]);
      }
      this.loader.dismissLoader();
    });
  }

   

}
