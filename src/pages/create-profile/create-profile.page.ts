import { CommonService } from 'src/providers/common.service';
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
  currentDate: any;
  modifyDate: any;
  customPickerOptions: any;
  focused = false;
  birthday;
  dateExample;
  isFormSubmit = true;

  constructor(
    private datePipe: DatePipe,
    private profileService: ProfileService,
    public navCtrl: NavController,
    public router: Router,
    public formBuilder: FormBuilder,
    private commonService: CommonService,
  ) {
    this.currentDate = new Date();
    this.modifyDate = this.datePipe.transform(this.currentDate, 'y-M-d');

    this.validateForm();
  }

  validateForm() {
    this.form = this.formBuilder.group({
      fName: ['', Validators.compose([Validators.required])],
      lName: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
      handle: ['', Validators.compose([Validators.required])],
    });
  }

  clickSave() {
    let profileData: Profile = this.form.value;
    profileData['mobileNumber'] = localStorage.getItem('mobile');
    profileData.dob = profileData.dob.split('T')[0];
    
    this.profileService.saveProfile(profileData).subscribe(resp => {
      const data: Profile = resp.data;
      if(!data.error) {
        this.commonService.showToast(data.message);
        this.router.navigate(['/tabs/tab-home']);
      }
    });
  }

  onDateFocused() {
    this.focused = true;
  }

  confirm(closeOverlay?: boolean) {}

  cancel(closeOverlay?: boolean) {}
}
