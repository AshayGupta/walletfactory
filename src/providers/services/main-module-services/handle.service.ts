import { Utils } from './../../../common/utils/utils';
import { ApiUrls } from './../../../common/constants/constants';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService';
  
@Injectable({
  providedIn: 'root'
})
export class HandleService {

  constructor(private httpService: HttpService) {}

  getHandleList() {
    return this.httpService.get(ApiUrls.handleList);
  }  

//   show(fav: Favourite) {
//     const form = Utils.formData(fav);
//     return this.httpService.post(ApiUrls.favList, form);
//   }
}