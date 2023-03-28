import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashbackDetailsPage } from './cashback-details.page';

const routes: Routes = [
  {
    path: '',
    component: CashbackDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashbackDetailsPageRoutingModule {}
