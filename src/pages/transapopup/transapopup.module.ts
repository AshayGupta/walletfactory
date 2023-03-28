import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransapopupPageRoutingModule } from './transapopup-routing.module';

import { TransapopupPage } from './transapopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransapopupPageRoutingModule
  ],
  declarations: [TransapopupPage]
})
export class TransapopupPageModule {}
