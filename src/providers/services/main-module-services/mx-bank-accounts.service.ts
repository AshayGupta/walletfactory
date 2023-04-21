import { Utils } from './../../../common/utils/utils';
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
    const form = Utils.formData(mxAccountData);
    return this.httpService.post(ApiUrls.mxAccount, form); 
  }

  mxBankList(mxbankListData:MXBankList) {  
    const form = Utils.formData(mxbankListData);
    return this.httpService.post(ApiUrls.mx_bank_list, form); 
  }
  

}
