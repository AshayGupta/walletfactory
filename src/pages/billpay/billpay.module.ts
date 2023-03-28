import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillpayPage } from './billpay.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BillpayPageRoutingModule } from './billpay-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BillpayPageRoutingModule
  ],
  declarations: [BillpayPage]
})
export class BillpayPageModule {}
