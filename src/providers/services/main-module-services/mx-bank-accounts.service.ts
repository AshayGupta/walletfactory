import { MxAccount,MXBankList } from '../../../models//mxBank.model';   
import { ApiUrls } from './../../../common/constants/constants';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService';

@Injectable({
  providedIn: 'root'
})
export class MxBankAccountService {

  constructor(private httpService: HttpService) {}

  mxCreateAccount(mxAccountData: MxAccount) {  
    const keys = Object.keys(mxAccountData); 
    const form = new FormData();
    for(let i=0; i<keys.length; i++) {
      form.append(keys[i], mxAccountData[keys[i]]);
    }
    return this.httpService.post(ApiUrls.mxAccount, form); 
  }

  mxBankList(mxbankListData:MXBankList) {  
    const keys = Object.keys(mxbankListData); 
    const form = new FormData();
    for(let i=0; i<keys.length; i++) {
      form.append(keys[i], mxbankListData[keys[i]]); 
    }
    return this.httpService.post(ApiUrls.mx_bank_list, form); 
  }
  

}
