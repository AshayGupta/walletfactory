import { Utils } from './../../../common/utils/utils';
import { MxAccount,MXBankList,userBankAccountData } from '../../../models//mxBank.model';   
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
 
  userAccountList(handle:any) {
    let apiUrl:any=ApiUrls.userAccountList+handle;
    return this.httpService.get(apiUrl);
  } 
  

}
