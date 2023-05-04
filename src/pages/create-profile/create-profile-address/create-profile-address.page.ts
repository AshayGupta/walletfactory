import { ToastService } from '../../../providers/plugin-services/toast.service';
import { ProfileService } from '../../../providers/services/main-module-services/profile.service';
import { MxBankAccountService } from '../../../providers/services/main-module-services/mx-bank-accounts.service';

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Profile,createProfileData } from '../../../models/profile.model';
 import { MxAccount } from '../../../models/mxBank.model';  
 import { PopupType } from '../../../common/enums/enums'; 
 import { LoaderService } from '../../../providers/plugin-services/loader.service';
import { CreateProfileSsnPage } from '../create-profile-ssn/create-profile-ssn.page';

@Component({
  selector: 'app-create-profile-address',
  templateUrl: './create-profile-address.page.html',
  styleUrls: ['./create-profile-address.page.scss'],
})
export class CreateProfileAddressPage implements OnInit {
  profile: Profile;
  createProfile: createProfileData;
  form: FormGroup;
  date;
  isFormSubmit = true;
   profileDataList:any;
   navParams:any;
  constructor(
    private datePipe: DatePipe,
    private profileService: ProfileService,
    private mxBankService: MxBankAccountService,    
    public navCtrl: NavController,
    private router: Router,
    public formBuilder: FormBuilder,
    private toastService: ToastService,
    private loader:LoaderService,
    public activatedRoute: ActivatedRoute,
  ) { 
    this.validateForm();

    this.navParams = this.activatedRoute.snapshot.params['profileData'];
    this.navParams=JSON.parse(this.navParams);  
  }

  ngOnInit() {
  }

  
  validateForm() {
    this.form = this.formBuilder.group({
      streetAddress: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      postalCode: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
    });
  }

  clickNext() {
    if (!this.form.valid) {
      this.isFormSubmit = false;
      return;
    }

     let profileData: Profile = this.form.value;
     profileData.fName=this.navParams.fName;
    profileData.lName=this.navParams.lName;
    profileData.email=this.navParams.email;
    profileData.dob=this.navParams.dob;
    // profileData.handle=this.navParams.handle;
    profileData.mobileNumber=this.navParams.mobileNumber;    
    profileData.streetAddress=this.form.value['streetAddress'];
    profileData.city=this.form.value['city'];
    profileData.state=this.form.value['state'];
    profileData.postalCode=this.form.value['postalCode']; 
    
    
     this.router.navigate(['/create-profile-ssn',{profileData:JSON.stringify(profileData)}]);     

    // this.loader.showLoading();
    // this.profileService.saveProfile(profileData).subscribe((resp) => { 
    //   const data: Profile = resp.data;
    //   if (!data.error) {
    //     let mxAccountData:any=new MxAccount();  
    //     mxAccountData.guid=data.mxGuid; 
    //     mxAccountData.mx_redirecturl=this.mx_redirecturl;  
    //     this.mxBankService.mxCreateAccount(mxAccountData).subscribe((resp) => {  
    //     this.loader.dismissLoader();   
    //       const mxAccoutData: MxAccount = resp.data;              
    //       if (!mxAccoutData.error) { 
    //         this.router.navigate(['/transapopup', {  widgetUrl: encodeURI(mxAccoutData.widgetUrl),message:mxAccoutData.message,mx_userId: mxAccoutData.mx_userId,popupType: PopupType.MX_ACCOUNT}]);
    //        } 
    //      });
    //   }
    //   this.toastService.showToast(data.message); 
    // });
  }

}
