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
export class CreateProfilePage implements OnInit {
  // create_profile_form = {} as create_profileForm;
   profile: Profile;
   createProfileForm: FormGroup;
   submitAttempt: boolean = false;
   date;
   currentDate: any;
   modifyDate:any
  // data:Observable<any>;
  customPickerOptions: any;
  focused=false;
  birthday;
  dateExample;

  constructor(private datePipe: DatePipe,public navCtrl: NavController, public router: Router,public formBuilder: FormBuilder,) {


    this.currentDate = new Date();
    this.modifyDate = this.datePipe.transform(this.currentDate, "y-M-d");

      this.validateForm();

      this.customPickerOptions = {
        buttons: [{
          color: 'red',
          text: 'Save',
          cssClass: 'test',
          handler: () => console.log('Clicked Save!')
        }, {
          text: 'Log',
          handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
            return false;
          }
        }]
      }
 
      }

  ngOnInit() {
  }

  validateForm() {
    this.createProfileForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      // middleName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      // email: ['', Validators.compose([Validators.required])],
      // phone: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
      handler: ['', Validators.compose([Validators.required])],
     });
  }


  clickSave() {
    let createprofileReq: Profile;
    createprofileReq.firstName = this.createProfileForm.controls['firstName'].value;
    // createprofileReq.middleName = this.createProfileForm.controls['middleName'].value;
    createprofileReq.lastName = this.createProfileForm.controls['lastName'].value;
    // createprofileReq.email = this.createProfileForm.controls['email'].value;
    // createprofileReq.phone = this.createProfileForm.controls['phone'].value;
    createprofileReq.dob = this.createProfileForm.controls['dob'].value;
    createprofileReq.handler = this.createProfileForm.controls['handler'].value;
    console.log('profile data',JSON.stringify(createprofileReq));
       this.router.navigate(['/tabs/tab-home']);
  
    }
     
    setPreferredDate(value) {
      // const convertDate = format(parseISO(value), 'dd MMM , yyyy');
      // this.schedulePreferredDate = convertDate;
    }


    onDateFocused() {
  this.focused = true; // make it false in on blur
}

   confirm(closeOverlay?: boolean){
    }

   cancel(closeOverlay?: boolean) {
 
   }

 
}
