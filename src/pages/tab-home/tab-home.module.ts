import { ProfileService } from 'src/providers/services/main-module-services/profile.service';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabhomePage } from './tab-home.page';
import { TabhomePageRoutingModule } from './tab-home-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabhomePageRoutingModule
  ],
  declarations: [TabhomePage],
  providers: [ProfileService]
})
export class TabhomePageModule {}
