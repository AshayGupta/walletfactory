import { OtpService } from './../../providers/services/auth/otp.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-mobile-number',
  templateUrl: './enter-mobile-number.page.html',
  styleUrls: ['./enter-mobile-number.page.scss'],
})
export class EnterMobileNumberPage {
  form: FormGroup;
  preferredCountries = ['us'];
  isFormSubmit = true;

  segment: string = 'phonenumber';

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    private otpService: OtpService
  ) {
    this.validateForm();
  }

  validateForm() {
    this.form = this.formBuilder.group({
      phoneNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
      ],
      // emailId: [''],
    });
  }

  onSubmit() {
    if(!this.form.valid) {
      this.isFormSubmit = false;
      return;
    }

    const phoneNumber = "+91"+this.form.controls['phoneNumber'].value;
    this.otpService.sendOtp(phoneNumber).subscribe(resp => {
      console.log('send otp resp', resp);
      localStorage.setItem('mobile', phoneNumber);
      this.router.navigate(['/otp', {otp: resp.data.otp, mobile: resp.data.mobileNumber}]);
    });
  }

  termsCondition() {
    console.log('terms & condition clicked');
  }
}