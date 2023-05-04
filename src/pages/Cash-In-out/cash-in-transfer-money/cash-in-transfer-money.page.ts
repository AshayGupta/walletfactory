import { LoaderService } from '../../../providers/plugin-services/loader.service';
import { CashIn } from '../../../models/cashIn.model';
import { CashInService } from '../../../providers/services/main-module-services/cash-in.service';
import { BankListPage } from './../bank-list/bank-list.page';
import { Favourite } from '../../../models/favourite.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopupType } from '../../../common/enums/enums';
import { ModalCtrlInterface, ModalCtrlService } from '../../../providers/plugin-services/modal-ctrl.service';
import { ChangeDetectorRef } from '@angular/core';

 


@Component({
  selector: 'app-cash-in-transfer-money',
  templateUrl: './cash-in-transfer-money.page.html',
  styleUrls: ['./cash-in-transfer-money.page.scss'],
})
export class CashInTransferMoneyPage {
  walletAmount:any;
  public transfer: CashIn = {
    amount: "",
    sendToBank: "",
    note: "",
    bankName: ''
  };

  constructor(
    private router: Router,
    private modalCtrl: ModalCtrlService,
    private loader: LoaderService,
    private cashInService: CashInService,
    private cdRef:ChangeDetectorRef
 
  ) { 

    this.walletAmount=localStorage.getItem('walletAmount');
    
  }

  async handleBanks() {
    const modal: ModalCtrlInterface = {
      pageName: BankListPage
    };
    this.transfer.sendToBank = await this.modalCtrl.create(modal) || "";
  }

  onConfirm() {
    if(!this.transfer.amount || !this.transfer.sendToBank) return;

    
    const fav: Favourite = {
      userHandle: localStorage.getItem('handle'),
      accountName: this.transfer.sendToBank, 
      amount: this.transfer.amount,
      note: this.transfer.note
    }; 
   
    this.loader.dismissLoader();
    this.cashInService.sendMoney(fav).subscribe(res => {
      if(res.status == 200 && !res.data.error) {
        let message:any=res.data.cashInResponse.message.trim();
        
        this.router.navigate(['/transapopup', { cashInmessage:message,popupType: PopupType.CASH_OUT_TRANSFER, addToFav: JSON.stringify(fav)}]);
      }
      this.loader.dismissLoader();
    });
  }

  change(value){
    //manually launch change detection
    this.cdRef.detectChanges();
    this.transfer.amount = value.length < 6 ? value.substring(0,6) : value; 
  }


}
