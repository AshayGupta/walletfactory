import { FavouriteService } from './../../providers/services/main-module-services/favourite.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.page.html',
  styleUrls: ['./favourite-list.page.scss'],
})
export class FavouriteListPage implements OnInit {

  public data = ['12369', '12367','12368'];
 
  
  public results = [...this.data];

  constructor(
    private favService: FavouriteService
  ) { }

  ngOnInit() {
    this.favService.show({userHandle: 1234}).subscribe(resp => {
      console.log('fav list', resp);
    });
  }

  handleSearch(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }
}
