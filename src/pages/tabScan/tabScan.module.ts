import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabScanPage } from './tabScan.page';
import { TabScanPageRoutingModule } from './tabScan-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabScanPageRoutingModule
  ],
  declarations: [TabScanPage]
})
export class TabScanPageModule {}
