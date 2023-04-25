import { LoaderService } from './../../../providers/plugin-services/loader.service';
import { ModalCtrlService } from './../../../providers/plugin-services/modal-ctrl.service';
import { HandleService } from './../../../providers/services/main-module-services/handle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.page.html',
  styleUrls: ['./contacts-list.page.scss'],
})
export class ContactsListPage implements OnInit {

  private handleList = [];
  public results = [];

  constructor(
    private modalCtrl: ModalCtrlService,
    private loader: LoaderService,
    private handleService: HandleService
  ) { }

  ngOnInit() {
    this.loader.showLoading();
    this.handleService.getHandleList().subscribe(resp => {
      if(resp.status == 200) {
        this.handleList = this.results = [...resp.data];
      }
      this.loader.dismissLoader();
    });
  }

  handleSearch(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.handleList.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

  selectHandle(handle) {
    this.modalCtrl.dismiss(handle);
  }

  cancel() {
    this.modalCtrl.dismiss();
  }
}
