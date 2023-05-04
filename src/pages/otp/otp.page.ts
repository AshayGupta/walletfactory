import { OtpService } from './../../providers/services/auth/otp.service';
import { VerifyOtp } from '../../models/otp.model';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ToastService } from './../../providers/plugin-services/toast.service';
import { LoaderService } from './../../providers/plugin-services/loader.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage {
  @ViewChild('otp1') otp1;
  @ViewChild('otp2') otp2;
  @ViewChild('otp3') otp3;
  @ViewChild('otp4') otp4;
  otpForm: FormGroup;
  submitAttempt: boolean = false;
  otpData = {
    otp: '',
    phoneNumber: '',
  };
  phone = '';

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public platform: Platform,
    private toastService: ToastService,
    public activatedRoute: ActivatedRoute,
    private otpService: OtpService,
    private loader: LoaderService
  ) {
    this.setupPage();
  }

  ionViewDidEnter() {
    this.otp1.setFocus();
  }

  setupPage() {
    this.otpData.otp = this.activatedRoute.snapshot.params['otp'];
    this.otpData.phoneNumber = this.activatedRoute.snapshot.params['mobile'];
    this.phone = this.otpData.phoneNumber.replace('+91', '+1');
  }

  otpController(event, next, prev) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus();
    } else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
  }

  onSubmit() {
    const enteredOtp = this.otp1.value + this.otp2.value + this.otp3.value + this.otp4.value;
    if (enteredOtp.length == 4 && enteredOtp == this.otpData.otp) {
      this.loader.showLoading();
      this.otpService.verifyOtp(this.otpData).subscribe(
        (resp) => {
          this.loader.dismissLoader();
          const data: VerifyOtp = resp.data;
          if (!data.error) {
            localStorage.setItem('guid', data.guid);
            localStorage.setItem('handle', data.handle);
            if (data.isProfileComplete) {
              this.router.navigate(['/tabs/tab-home']);
            } else {
              this.router.navigate(['/create-profile']);
            }
          }
          this.toastService.showToast(data.message);
        },
        (err) => {
          this.toastService.showToast(err);
        }
      );
    } else {
      this.otp1.setFocus();
      this.toastService.showToast();
    }
  }
}
