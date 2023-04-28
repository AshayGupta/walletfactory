import { ToastService } from './../../providers/plugin-services/toast.service';
import { ProfileService } from './../../providers/services/main-module-services/profile.service';
 import { ApiUrls } from './../../common/constants/constants';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Profile, createProfileData } from '../../models/profile.model';
 import { LoaderService } from './../../providers/plugin-services/loader.service';

@Component({
  selector: 'app-more',
  templateUrl: 'more.page.html',
  styleUrls: ['more.page.scss'],
})
export class MorePage {
  profile: Profile;
   form: FormGroup;
   isFormSubmit = true;
   public arr = new Array(5);
   reponseProfileData:any;
   FullName:any;

  constructor( private datePipe: DatePipe,
    private profileService: ProfileService,
     public navCtrl: NavController,
    private router: Router,
    public formBuilder: FormBuilder,
    private toastService: ToastService,
    private loader: LoaderService,
    public activatedRoute: ActivatedRoute) {}


    ngOnInit() {

      this.getUserProfile();
    }


  openWalletLevel() {
    this.router.navigate(['/wallet-levels']);
  }

  linkBankAccount() {
    this.router.navigate(['/payment-method']);
  }

  openSettings() {
    this.router.navigate(['/settings']);
  }
  openSupport() {
    this.router.navigate(['/support']);
  }
  openLegal() {
    this.router.navigate(['/legal']);
  }
  logout() {
     localStorage.clear(); 
     this.router.navigate(['']); 
   }



   getUserProfile() {
   
    let profileData=new Profile;
     profileData.userHandle = localStorage.getItem('handle'); 

    this.loader.showLoading();
    this.profileService.getUserProfile(profileData).subscribe((resp) => {
      const data: Profile = resp.data;
      this.loader.dismissLoader();

      this.reponseProfileData=data;
      this.FullName=data.name + ' ' +data.lname;
      
    });
  }


  showUserProfileDetails(){ 
    this.router.navigate([
      '/profile-details',{ reponseProfileData: JSON.stringify(this.reponseProfileData)},
    ]);   
  }


}
