import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MxaccountPageRoutingModule } from './mxaccount-routing.module';

import { MxaccountPage } from './mxaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MxaccountPageRoutingModule
  ],
  declarations: [MxaccountPage]
})
export class MxaccountPageModule {}
