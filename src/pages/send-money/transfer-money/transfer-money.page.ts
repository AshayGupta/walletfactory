import { Favourite } from './../../../models/favourite.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopupType } from 'src/common/enums/enums';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.page.html',
  styleUrls: ['./transfer-money.page.scss'],
})
export class TransferMoneyPage {

  public transfer = {
    amount: "500",
    to: "",
    note: ""
  };

  constructor(private router: Router ) { }

  handleContacts() {
    this.router.navigate(['/contacts-list']);
  }

  showFavourites() {
    this.router.navigate(['/favourite-list']);
  }

  onConfirm() {
    if(!this.transfer.amount || !this.transfer.to) return;

    const fav: Favourite = {
      sourceHandle: localStorage.getItem('handle'),
      destinationHandle: this.transfer.to,
      amount: this.transfer.amount
    };
    this.router.navigate(['/transapopup', { popupType: PopupType.SEND_MONEY, addToFav: fav}]);
  }

}
