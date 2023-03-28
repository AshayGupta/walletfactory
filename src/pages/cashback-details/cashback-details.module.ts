import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashbackDetailsPageRoutingModule } from './cashback-details-routing.module';

import { CashbackDetailsPage } from './cashback-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashbackDetailsPageRoutingModule
  ],
  declarations: [CashbackDetailsPage]
})
export class CashbackDetailsPageModule {}
