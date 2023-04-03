import { OtpService } from './../../providers/services/auth/otp.service';
import { VerifyOtp } from 'src/models/otp.model';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ToastService } from 'src/providers/plugin-services/toast.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage {
  @ViewChild('codesInpunt0') codesInpunt0;
  @ViewChild('codesInpunt1') codesInpunt1;
  @ViewChild('codesInpunt2') codesInpunt2;
  @ViewChild('codesInpunt3') codesInpunt3;
  enteredCode: string = '';
  code = Array();
  otpForm: FormGroup;
  submitAttempt: boolean = false;
  otpData = {
    otp: '',
    phoneNumber: '',
  };
  phone = ""

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public platform: Platform,
    private toastService: ToastService,
    public activatedRoute: ActivatedRoute,
    private otpService: OtpService,
  ) {
    this.setupPage();
  }

  ionViewDidEnter() {
    this.codesInpunt0.setFocus();
  }

  setupPage() {
    this.otpData.otp = this.activatedRoute.snapshot.params['otp'];
    this.otpData.phoneNumber = this.activatedRoute.snapshot.params['mobile'];
    this.phone = this.otpData.phoneNumber.replace("+91", "+1")
  }

  changeFocus(inputToFocus) {
    switch (inputToFocus) {
      case 1:
        this.codesInpunt1.setFocus();
        break;
      case 2:
        this.codesInpunt2.setFocus();
        break;
      case 3:
        this.codesInpunt3.setFocus();
        break;
      case 4:
        this.codesInpunt3.setFocus();
        break;
    }
    this.enteredCode =
      this.code[0] + this.code[1] + this.code[2] + this.code[3];
  }

  resetCode() {
    this.code = [];
  }

  onSubmit() {
    if (
      this.enteredCode.length == 4 &&
      this.enteredCode == this.otpData.otp
    ) {
      this.otpService.verifyOtp(this.otpData).subscribe(resp => {
        const data: VerifyOtp = resp.data;
        if(!data.error && !!data.isProfileComplete) {
          this.router.navigate(['/tabs/tab-home']);
        }else{
          this.router.navigate(['/create-profile']);
        }
        this.toastService.showToast(data.message);
      },
      err => {
        this.toastService.showToast(err);
      });
    }
    else {
      this.codesInpunt0.setFocus();
      this.toastService.showToast();
    }
  }
}
