import { Utils } from './../../../common/utils/utils';
import { MxAccount,MXBankList,plaidWidgetData } from '../../../models//mxBank.model';   
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

  plaidWidgetList(plaidWidgetList:plaidWidgetData) {  
    const form = Utils.formData(plaidWidgetList);
    return this.httpService.post(ApiUrls.plaidWidgetURL, form); 
  }
  

}
