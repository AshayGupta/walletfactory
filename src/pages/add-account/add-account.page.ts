import { Component, OnInit } from '@angular/core';
 import { NavController } from '@ionic/angular';
import { addAccountData } from '../../models/addAccount'; 
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PopupType } from 'src/common/enums/enums';
@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.page.html',
  styleUrls: ['./add-account.page.scss'],
})
export class AddAccountPage implements OnInit {
  addAccountData: addAccountData;
  addAccountDataForm: FormGroup;
  submitAttempt: boolean = false;
  constructor(public navCtrl: NavController, public router: Router,public formBuilder: FormBuilder,) {

    this.validateForm();

   }

  ngOnInit() {
  }
  
  validateForm() {
    this.addAccountDataForm = this.formBuilder.group({
      cardNumber: ['', Validators.compose([Validators.required])],
      expDate: ['', Validators.compose([Validators.required])],
      threeDigitCVV: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      zipCode: ['', Validators.compose([Validators.required])],
      });
  }


  clickSave() {
    let addAccountReq = new addAccountData();
    addAccountReq.cardNumber = this.addAccountDataForm.controls['cardNumber'].value;
    addAccountReq.expDate = this.addAccountDataForm.controls['expDate'].value;
    addAccountReq.threeDigitCVV = this.addAccountDataForm.controls['threeDigitCVV'].value;
    addAccountReq.country = this.addAccountDataForm.controls['country'].value;
    addAccountReq.zipCode = this.addAccountDataForm.controls['zipCode'].value;
     console.log('addAccount Req',JSON.stringify(addAccountReq)); 
      //  this.router.navigate(['/tabs/tab-home']); 
       this.router.navigate(['/transapopup', { popupType: PopupType.TRANSFER}]);  

  
    }
     
}
