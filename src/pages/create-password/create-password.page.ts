import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
 import { NavController } from '@ionic/angular';
 import {
   FormGroup,
   Validators,
   AbstractControl,
   FormBuilder,
 } from '@angular/forms';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.page.html',
  styleUrls: ['./create-password.page.scss'],
})
export class CreatePasswordPage implements OnInit {
  public changePasswordForm: FormGroup;
  changingPassword:boolean=false;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder,public router: Router) {

    this.buildForm();
   }

  ngOnInit() { }

  
  public buildForm(): void {
    this.changePasswordForm = this.formBuilder.group(
      {
        newPassword: [
          '',
          Validators.compose([Validators.minLength(4), Validators.required]),
        ],
        confirmPassword: [
          '',
          Validators.compose([Validators.minLength(4), Validators.required]),
        ],
      },
      // {
      //   validator: this.MatchPassword, // Inject the provider method
      // }
    );
  }

  private MatchPassword(AC: AbstractControl) {
    const newPassword = AC.get('newPassword').value; // to get value in input tag
    const confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
    if (newPassword != confirmPassword) {
      console.log('false');
      AC.get('confirmPassword').setErrors({ MatchPassword: true });
    } else {
      console.log('true');
      this.router.navigate(['/security-question']);

      AC.get('confirmPassword').setErrors(null);
    }
  }

  submit(){
    
    let newPassword=this.changePasswordForm.controls['newPassword'].value;
    let confirmPassword=this.changePasswordForm.controls['confirmPassword'].value;
    if (newPassword!=confirmPassword) {
      console.log('false');
      alert('Password and Confirm password did not match');
     } else {
      console.log('true');
      this.router.navigate(['/tabs']);

     }
 

  }

  
}
