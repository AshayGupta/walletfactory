import { ShowFavList } from './../../models/favourite.model';
import { LoaderService } from './../../providers/plugin-services/loader.service';
import { FavouriteService } from './../../providers/services/main-module-services/favourite.service';
import { Component, OnInit } from '@angular/core';
import { ModalCtrlService } from 'src/providers/plugin-services/modal-ctrl.service';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.page.html',
  styleUrls: ['./favourite-list.page.scss'],
})
export class FavouriteListPage implements OnInit {

  private favList: ShowFavList[] = [];
  public results: ShowFavList[] = [];

  constructor(
    private loader: LoaderService,
    private modalCtrl: ModalCtrlService,
    private favService: FavouriteService
  ) { }

  ngOnInit() {
    this.favService.show({userHandle: 6767}).subscribe(resp => {
      console.log('fav list', resp);
      if(resp.status == 200 && !resp.data.error) {
        this.favList = this.results = [...resp.data.favList];
      }
      this.loader.dismissLoader();
    });
  }

  handleSearch(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.favList.filter(d => (d.source_handle.toLowerCase().indexOf(query) > -1 || d.destination_handle.toLocaleLowerCase().indexOf(query) > -1));
  }

  selectFav(fav: ShowFavList) {

  }

  cancel() {
    this.modalCtrl.dismiss();
  }
}
