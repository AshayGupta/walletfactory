import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
})
export class PaymentMethodPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  openBankAccount(bankName){
console.log(bankName);
  }
  openAddAccount(){
    this.router.navigate(['/add-account']);  //add-account

  }
}
