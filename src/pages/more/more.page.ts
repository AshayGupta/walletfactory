import { ToastService } from './../../providers/plugin-services/toast.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-more',
  templateUrl: 'more.page.html',
  styleUrls: ['more.page.scss'],
})
export class MorePage implements OnInit {
  form: FormGroup;
  isFormSubmit = true;
  fullName: string;

  constructor(
    public navCtrl: NavController,
    private router: Router,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fullName = localStorage.getItem('fullName');
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


  showUserProfileDetails() {
    this.router.navigate(['/profile-details']);
  }
}
