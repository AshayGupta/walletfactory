import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
})
export class PaymentMethodPage {
  
  constructor(public router: Router) {}

  banksList = [
    { id: 1, name: "Bank of America", icon: "../../assets/project-icons/bank/bank.png" },
    { id: 2, name: "City Bank", icon: "../../assets/project-icons/bank/bank.png" }
  ];

  openBankAccount(bank) {
    console.log(bank);
  }

  openAddAccount() {
    this.router.navigate(['/add-account']);
  }
}
