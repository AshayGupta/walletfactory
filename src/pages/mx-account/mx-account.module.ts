import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MxAccountPageRoutingModule } from './mx-account-routing.module';

import { MxAccountPage } from './mx-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MxAccountPageRoutingModule
  ],
  declarations: [MxAccountPage]
})
export class MxAccountPageModule {}
