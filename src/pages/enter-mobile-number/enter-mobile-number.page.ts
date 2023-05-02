import { AlertService } from './../../providers/plugin-services/alert.service';
import { OtpService } from './../../providers/services/auth/otp.service';
import { LoaderService } from './../../providers/plugin-services/loader.service';

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { Router } from '@angular/router';
import { AlertButton, AlertOptions } from '@ionic/angular';

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
    private otpService: OtpService,
    private loader:LoaderService,
    private alertService: AlertService
  ) {
    this.validateForm();
  }

  validateForm() {
    this.form = this.formBuilder.group({
      phoneNumber: [
        '',// '9944332511',
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
    this.loader.showLoading();
    this.otpService.sendOtp(phoneNumber).subscribe(resp => {
      console.log('send otp resp', resp);
      this.loader.dismissLoader();   
      localStorage.setItem('mobile', phoneNumber);
      this.router.navigate(['/otp', {otp: resp.data.otp, mobile: resp.data.mobileNumber}]);
    });
  }

  showTncAlert() {
    const alertButtons: AlertButton[] = [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => { }
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => { this.onSubmit() }
      }
    ];

    const alert: AlertOptions = {
      message: 'By entering and tapping Next, you agree to the terms, Electronic Signature & Privacy Policy.',
      buttons: alertButtons
    };

    this.alertService.confirm(alert);
  }
}