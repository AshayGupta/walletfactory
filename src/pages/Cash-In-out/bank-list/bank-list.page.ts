import { LoaderService } from '../../../providers/plugin-services/loader.service';
import { ModalCtrlService } from '../../../providers/plugin-services/modal-ctrl.service';
import { CashInService } from '../../../providers/services/main-module-services/cash-in.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.page.html',
  styleUrls: ['./bank-list.page.scss'],
})
export class BankListPage implements OnInit {

  private bankList = [];
  public results = [];

  constructor(
    private modalCtrl: ModalCtrlService,
    private loader: LoaderService,
    private cashInService: CashInService
  ) { }

  ngOnInit() {
    if(!!localStorage.getItem('handle') && localStorage.getItem('handle')!=''){ 
      let userHandle:any = localStorage.getItem('handle'); 
    this.loader.showLoading();
    this.cashInService.userAccountList(userHandle).subscribe(resp => {
      if(resp.status == 200) {
        this.bankList = this.results = [...resp.data];
      }
      this.loader.dismissLoader();
    });
    }
  }
   
  bankSearch(event:any) {
     const query = event.target.value.toLowerCase();
    this.results = this.bankList.filter(d => d.account_name.toLowerCase().indexOf(query) > -1);
  }

  selectBank(handle) {
    this.modalCtrl.dismiss(handle.account_name);
  }

  cancel() {
    this.modalCtrl.dismiss();
  }
}
