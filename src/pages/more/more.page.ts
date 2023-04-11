import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: 'more.page.html',
  styleUrls: ['more.page.scss'],
})
export class MorePage {
  public arr = new Array(5);
  constructor(public router: Router) {}

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
}
