import { ApiUrls } from './../../../common/constants/constants';
import { Injectable } from '@angular/core';
import { Otp } from 'src/models/otp.model';
import { HttpService } from '../../httpService';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpService: HttpService) {}

  saveProfile(profileData) {
    return this.httpService.post(ApiUrls.sendOtp, profileData);
  }


}