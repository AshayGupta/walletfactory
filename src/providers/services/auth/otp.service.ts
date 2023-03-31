import { ApiUrls } from './../../../common/constants/constants';
import { Injectable } from '@angular/core';
import { Otp } from 'src/models/otp.model';
import { HttpService } from '../../httpService';
@Injectable({
  providedIn: 'root'
})
export class OtpService {

  private sendOtpEndPoint = ApiUrls.sendOtp;
  private verifyOtpEndPoint = ApiUrls.verifyOtp;

  constructor(private httpService: HttpService) {}

  async sendOtp(data: Otp) {
    const form = new FormData();
    form.append("phoneNumber", "+919971997554");

    this.httpService.post(this.sendOtpEndPoint, form).subscribe(resp => {
      console.log('send Otp', resp);
    })
  }

  verifyOtp(data: Otp) {
    
  }

}
