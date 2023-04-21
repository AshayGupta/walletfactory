import { FavouriteService } from './../../providers/services/main-module-services/favourite.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouriteListPageRoutingModule } from './favourite-list-routing.module';

import { FavouriteListPage } from './favourite-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouriteListPageRoutingModule
  ],
  declarations: [FavouriteListPage],
  providers: [FavouriteService]
})
export class FavouriteListPageModule {}
