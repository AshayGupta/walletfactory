import { Profile } from 'src/models/profile.model';
import { ApiUrls } from './../../../common/constants/constants';
import { Injectable } from '@angular/core';
import { Otp } from 'src/models/otp.model';
import { HttpService } from '../../httpService';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpService: HttpService) {}

  saveProfile(profileData: Profile) {
    return this.httpService.post(ApiUrls.saveProfile, profileData);
  }


}