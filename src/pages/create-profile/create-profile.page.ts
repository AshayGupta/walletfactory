import { ProfileService } from './../../providers/services/main-module-services/profile.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { Profile } from 'src/models/profile.model';

// import { Observable } from 'rxjs/Observable';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage {
  profile: Profile;
  createProfileForm: FormGroup;
  submitAttempt: boolean = false;
  date;
  currentDate: any;
  modifyDate: any;
  customPickerOptions: any;
  focused = false;
  birthday;
  dateExample;

  constructor(
    private datePipe: DatePipe,
    private profileService: ProfileService,
    public navCtrl: NavController,
    public router: Router,
    public formBuilder: FormBuilder
  ) {
    this.currentDate = new Date();
    this.modifyDate = this.datePipe.transform(this.currentDate, 'y-M-d');

    this.validateForm();

    this.customPickerOptions = {
      buttons: [
        {
          color: 'red',
          text: 'Save',
          cssClass: 'test',
          handler: () => console.log('Clicked Save!'),
        },
        {
          text: 'Log',
          handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
            return false;
          },
        },
      ],
    };
  }

  validateForm() {
    this.createProfileForm = this.formBuilder.group({
      fName: ['', Validators.compose([Validators.required])],
      lName: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
      handler: ['', Validators.compose([Validators.required])],
    });
  }

  clickSave() {
    let profileData: Profile = this.createProfileForm.value;
    profileData['mobileNumber'] = localStorage.getItem('mobile');
    profileData.dob = profileData.dob.split('T')[0];
    
    this.profileService.saveProfile(profileData).subscribe(resp => {
      console.log('profile save', resp);
      this.router.navigate(['/tabs/tab-home']);
    });
  }

  onDateFocused() {
    this.focused = true;
  }

  confirm(closeOverlay?: boolean) {}

  cancel(closeOverlay?: boolean) {}
}
