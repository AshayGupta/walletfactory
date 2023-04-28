import { Component, OnInit } from '@angular/core';
 import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})
export class ProfileDetailsPage implements OnInit {
  userProfileDetails:any;

  constructor( 
    public navCtrl: NavController,
    private router: Router,
    public activatedRoute: ActivatedRoute) { 

    this.userProfileDetails =
    this.activatedRoute.snapshot.params['reponseProfileData'];
    this.userProfileDetails = JSON.parse(this.userProfileDetails);

    }

  ngOnInit() {
  }

}
