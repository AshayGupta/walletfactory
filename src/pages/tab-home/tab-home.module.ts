import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabhomePage } from './tab-home.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabhomePageRoutingModule } from './tab-home-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabhomePageRoutingModule
  ],
  declarations: [TabhomePage]
})
export class TabhomePageModule {}
