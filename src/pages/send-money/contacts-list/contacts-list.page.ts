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
    private handleService: HandleService
  ) { }

  ngOnInit() {
    this.handleService.getHandleList().subscribe(resp => {
      console.log('handle list', resp);
      if(resp.status == 200) {
        this.handleList = this.results = [...resp.data];
      }
    });
  }

  handleSearch(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.handleList.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

}
