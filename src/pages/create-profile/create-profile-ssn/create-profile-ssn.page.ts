import { ToastService } from './../../../providers/plugin-services/toast.service';
import { ProfileService } from './../../../providers/services/main-module-services/profile.service';
import { MxBankAccountService } from './../../../providers/services/main-module-services/mx-bank-accounts.service';
import { ApiUrls } from './../../../common/constants/constants';

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Profile, createProfileData } from '../../../models/profile.model';
import { PopupType } from '../../../common/enums/enums';
import { LoaderService } from './../../../providers/plugin-services/loader.service';
@Component({
  selector: 'app-create-profile-ssn',
  templateUrl: './create-profile-ssn.page.html',
  styleUrls: ['./create-profile-ssn.page.scss'],
})
export class CreateProfileSsnPage implements OnInit {
  profile: Profile;
  createProfile: createProfileData;
  form: FormGroup;
  date;
  isFormSubmit = true;
  createProfileDetails: any;

  constructor(
    private datePipe: DatePipe,
    private profileService: ProfileService,
    private mxBankService: MxBankAccountService,
    public navCtrl: NavController,
    private router: Router,
    public formBuilder: FormBuilder,
    private toastService: ToastService,
    private loader: LoaderService,
    public activatedRoute: ActivatedRoute
  ) {
    this.validateForm();
    this.createProfileDetails =
    this.activatedRoute.snapshot.params['profileData'];
    this.createProfileDetails = JSON.parse(this.createProfileDetails);
  }

  ngOnInit() {}

  validateForm() {
    this.form = this.formBuilder.group({
      ssn: ['', Validators.compose([Validators.required,Validators.maxLength(9)])],
      handle: ['', Validators.compose([Validators.required, Validators.minLength(4)])],

      // handle: ['', Validators.compose([Validators.required, Validators.pattern(/^(?:[a-zA-Z0-9\s]+)?$/), Validators.minLength(4)])],
    });
  }

  clickNext() {
    if (!this.form.valid) {
      this.isFormSubmit = false;
      return;
    }
    
    let profileData: Profile = this.form.value;
    profileData.fName = this.createProfileDetails.fName;
    profileData.lName = this.createProfileDetails.lName;
    profileData.email = this.createProfileDetails.email;
    profileData.dob = this.createProfileDetails.dob;
    profileData.handle = this.form.value['handle'];
    profileData.streetAddress = this.createProfileDetails.streetAddress;
    profileData.city = this.createProfileDetails.city;
    profileData.state = this.createProfileDetails.state;
    profileData.postalCode = this.createProfileDetails.postalCode;
    profileData.mobileNumber = this.createProfileDetails.mobileNumber;
    profileData.ssn = this.form.value['ssn'];
    profileData.country = 'USA';
    
    this.loader.showLoading();
    this.profileService.saveProfile(profileData).subscribe((resp) => {
      const data: Profile = resp.data;
      this.loader.dismissLoader();
      if (!data.error) {
        this.router.navigate([
          '/transapopup',
          { message: data.message, popupType: PopupType.MX_ACCOUNT },
        ]);
      }
      this.toastService.showToast(data.message);
    });
  }
}
