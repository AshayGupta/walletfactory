import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CashbackPage } from './cashback.page';

import { CashbackPageRoutingModule } from './cashback-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CashbackPageRoutingModule
  ],
  declarations: [CashbackPage]
})
export class CashbackPageModule {}
