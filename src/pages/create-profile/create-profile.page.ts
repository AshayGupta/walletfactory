import { ToastService } from './../../providers/plugin-services/toast.service';
import { ProfileService } from './../../providers/services/main-module-services/profile.service';
import { MxBankAccountService } from './../../providers/services/main-module-services/mx-bank-accounts.service';

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Profile } from '../../models/profile.model';
 import { MxAccount } from '../../models/mxBank.model';  
 import { PopupType } from '../../common/enums/enums'; 
 import { LoaderService } from './../../providers/plugin-services/loader.service';



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
  mx_redirecturl:any='http://cashdrop.v3ainfo.com/api/mx-linkbank-callback';
 
  constructor(
    private datePipe: DatePipe,
    private profileService: ProfileService,
    private mxBankService: MxBankAccountService,    
    public navCtrl: NavController,
    public router: Router,
    public formBuilder: FormBuilder,
    private toastService: ToastService,
    private loader:LoaderService
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

    this.loader.showLoading();

    this.profileService.saveProfile(profileData).subscribe((resp) => { 
      const data: Profile = resp.data;
      if (!data.error) {
        let mxAccountData:any=new MxAccount();  
        mxAccountData.guid=data.mxGuid; 
        mxAccountData.mx_redirecturl=this.mx_redirecturl;  
        this.mxBankService.mxCreateAccount(mxAccountData).subscribe((resp) => {  
        this.loader.dismissLoader();   
          const mxAccoutData: MxAccount = resp.data;              
          if (!mxAccoutData.error) { 
            this.router.navigate(['/transapopup', {  widgetUrl: encodeURI(mxAccoutData.widgetUrl),message:mxAccoutData.message,mx_userId: mxAccoutData.mx_userId,popupType: PopupType.MX_ACCOUNT}]);
           } 
         });
      }
      this.toastService.showToast(data.message); 
    });
  }
}
