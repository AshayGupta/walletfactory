import { ApiUrls } from './../../../common/constants/constants';
import { Injectable } from '@angular/core';
import { Otp } from 'src/models/otp.model';
import { HttpService } from '../../httpService';
@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor(private httpService: HttpService) {}

  sendOtp(phoneNumber) {
    const form = new FormData();
    form.append("phoneNumber", phoneNumber);

    return this.httpService.post(ApiUrls.sendOtp, form);
  }

  verifyOtp(data: Otp) {
    const keys = Object.keys(data);

    const form = new FormData();
    for(let i=0; i<keys.length; i++) {
      form.append(keys[i], data[keys[i]]);
    }
    return this.httpService.post(ApiUrls.verifyOtp, form);
  }

}