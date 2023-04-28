import { Utils } from './../../../common/utils/utils';
import { Profile} from '../../../models/profile.model';
import { ApiUrls } from './../../../common/constants/constants';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService';
  
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpService: HttpService
    ) {}

  saveProfile(profileData: Profile) {
    const form = Utils.formData(profileData);
    return this.httpService.post(ApiUrls.saveProfile, form);
  } 

  getUserProfile(profileData: Profile) {
    const form = Utils.formData(profileData);
    return this.httpService.post(ApiUrls.handleUserInfo, form); 
  } 
  

   

}