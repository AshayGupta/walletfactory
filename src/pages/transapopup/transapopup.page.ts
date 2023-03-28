import { TransactionPopup } from './../../models/transactionPopup.interface';
import { PopupType } from './../../common/enums/enums';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transapopup',
  templateUrl: './transapopup.page.html',
  styleUrls: ['./transapopup.page.scss'],
})
export class TransapopupPage implements OnInit {

  popupToOpen;
  popup: TransactionPopup;
  get PopupType() { return PopupType; }

  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.popupToOpen = this.activatedRoute.snapshot.params['popupType'];
  }

  handleClick() {
    // this.router.navigate(['/enter-mobile-number']);
  }

  cancelClicked() {

  }
  
  backToHome() {
    this.router.navigate(['/tabs/tab-home']);
  }

  addToFav() {
    
  }
}
