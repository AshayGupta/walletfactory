import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletLevelsPage } from './wallet-levels.page';

const routes: Routes = [
  {
    path: '',
    component: WalletLevelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletLevelsPageRoutingModule {}
