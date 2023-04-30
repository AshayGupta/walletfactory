import { Utils } from './../../common/utils/utils';
import { Profile } from './../../models/profile.model';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})
export class ProfileDetailsPage implements OnInit {
  detailsToDisplay = [];

  constructor(
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute
  ) {
    const profile: Profile = JSON.parse(localStorage.getItem('userInfo'));
    const {streetAddress, city, state, mobile, email} = profile;

    this.detailsToDisplay = [
      {title: 'Mobile number', subTitle: mobile || 'N/A', icon: '', isInfoAvailable: true},
      {title: 'Email', subTitle: email || 'N/A', icon: '', isInfoIcon: false},
      {title: 'Address', subTitle: Utils.removeEmpty(streetAddress+' '+city+' '+state) || 'N/A', icon: '', isInfoIcon: false},
    ];
  }

  ngOnInit() {}
}
