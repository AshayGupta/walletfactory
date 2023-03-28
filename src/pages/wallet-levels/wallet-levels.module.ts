import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletLevelsPageRoutingModule } from './wallet-levels-routing.module';

import { WalletLevelsPage } from './wallet-levels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletLevelsPageRoutingModule
  ],
  declarations: [WalletLevelsPage]
})
export class WalletLevelsPageModule {}
