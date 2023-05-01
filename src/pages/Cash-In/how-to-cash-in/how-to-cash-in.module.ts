import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowToCashInPageRoutingModule } from './how-to-cash-in-routing.module';

import { HowToCashInPage } from './how-to-cash-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowToCashInPageRoutingModule
  ],
  declarations: [HowToCashInPage]
})
export class HowToCashInPageModule {}
