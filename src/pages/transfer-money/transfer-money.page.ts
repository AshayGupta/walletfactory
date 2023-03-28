import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopupType } from 'src/common/enums/enums';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.page.html',
  styleUrls: ['./transfer-money.page.scss'],
})
export class TransferMoneyPage {

  constructor(private router: Router ) { }

  onConfirm() {
    this.router.navigate(['/transapopup', { popupType: PopupType.SEND_MONEY}]);
  }

}
