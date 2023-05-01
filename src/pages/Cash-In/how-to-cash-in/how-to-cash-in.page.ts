import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-cash-in',
  templateUrl: './how-to-cash-in.page.html',
  styleUrls: ['./how-to-cash-in.page.scss'],
})
export class HowToCashInPage implements OnInit {

  walletNumber: string = '';

  constructor() { }

  ngOnInit() {
    this.walletNumber = localStorage.getItem('mobile') || 'N/A';
  }

}
