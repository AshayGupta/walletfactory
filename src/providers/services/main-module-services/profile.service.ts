import { Profile} from '../../../models/profile.model';
import { ApiUrls } from './../../../common/constants/constants';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService';
  
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpService: HttpService) {}

  saveProfile(profileData: Profile) {
    const keys = Object.keys(profileData);

    const form = new FormData();
    for(let i=0; i<keys.length; i++) {
      form.append(keys[i], profileData[keys[i]]);
    }
    return this.httpService.post(ApiUrls.saveProfile, form);
  } 

   

}