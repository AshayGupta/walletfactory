import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
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

  segment: string = 'phonenumber';

  constructor(
    public router: Router,
    public formBuilder: FormBuilder
  ) {
    this.validateForm();
  }

  validateForm() {
    this.form = this.formBuilder.group({
      phoneNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{0-10}'),
        ]),
      ],
      emailId: [''],
    });
  }

  onSubmit() {
    let phoneNumber = this.form.controls['phoneNumber'].value;
    if (phoneNumber == null) {
      alert('Please enter valid mobile no.');
    } else {
      console.log(phoneNumber);
      localStorage.setItem('Mobile', phoneNumber);
      // this.router.navigate(['/otp']);
      this.router.navigate(['/otp']);
    }
  }

  termsCondition() {
    console.log('terms & condition clicked');
  }
}