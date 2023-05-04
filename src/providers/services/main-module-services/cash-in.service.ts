import { Favourite } from './../../../models/favourite.model';
import { Utils } from './../../../common/utils/utils';
import { ApiUrls } from './../../../common/constants/constants';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService';
  
@Injectable({
  providedIn: 'root'
})
export class CashInService {

  constructor(private httpService: HttpService) {}

  sendMoney(fav: Favourite) { 
    const form = Utils.formData(fav);
    return this.httpService.post(ApiUrls.cashInTransfer, form);
  }

  cashOutMoney(fav: Favourite) { 
    const form = Utils.formData(fav);
    return this.httpService.post(ApiUrls.cashOutTransfer, form);
  }
  

  userAccountList(handle:any) {
    let apiUrl:any=ApiUrls.userAccountList+handle;
    return this.httpService.get(apiUrl);
  } 


}