import { Favourite } from './../../../models/favourite.model';
import { Utils } from './../../../common/utils/utils';
import { ApiUrls } from './../../../common/constants/constants';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService';
  
@Injectable({
  providedIn: 'root'
})
export class SendMoneyService {

  constructor(private httpService: HttpService) {}

  send(fav: Favourite) {
    const form = Utils.formData(fav);
    return this.httpService.post(ApiUrls.sendMoney, form);
  }
}