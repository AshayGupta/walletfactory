import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
scan = 'assets/project-icons/scan.svg'; 
home= 'assets/project-icons/home.svg'; 
bloodDrop= 'assets/project-icons/blood-drop.svg'; 
piggyBank= 'assets/project-icons/piggy-bank.svg'; 
menu= 'assets/project-icons/menu.svg'; 

  constructor(private router: Router,) {}

  ionViewWillEnter(){
this.homeScreen();
  }

  homeScreen(){
    this.router.navigateByUrl('/tabs/tab-home');

  }

}
