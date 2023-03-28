import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-levels',
  templateUrl: './wallet-levels.page.html',
  styleUrls: ['./wallet-levels.page.scss'],
})
export class WalletLevelsPage implements OnInit {
   currentLevel = 'assets/project-icons/tick.svg'; 

  constructor() { }

  ngOnInit() {
  }
  standardDetailCLick(){

  }
}
