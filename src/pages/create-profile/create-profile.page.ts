import { ToastService } from 'src/providers/plugin-services/toast.service';
import { ProfileService } from './../../providers/services/main-module-services/profile.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { Profile } from 'src/models/profile.model';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage {
  profile: Profile;
  form: FormGroup;
  date;
  isFormSubmit = true;

  constructor(
    private datePipe: DatePipe,
    private profileService: ProfileService,
    public navCtrl: NavController,
    public router: Router,
    public formBuilder: FormBuilder,
    private toastService: ToastService
  ) {
    this.validateForm();
  }

  validateForm() {
    this.form = this.formBuilder.group({
      fName: ['', Validators.compose([Validators.required])],
      lName: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
      handle: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
    });
  }

  clickSave() {
    if (!this.form.valid) {
      this.isFormSubmit = false;
      return;
    }

    let profileData: Profile = this.form.value;
    profileData['mobileNumber'] = localStorage.getItem('mobile');
    profileData.dob = profileData.dob.split('T')[0];

    this.profileService.saveProfile(profileData).subscribe((resp) => {
      const data: Profile = resp.data;
      if (!data.error) {
        this.router.navigate(['/tabs/tab-home']);
      }
      this.toastService.showToast(data.message);
    });
  }
}
