import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashInTransferMoneyPage } from './cash-in-transfer-money.page';

const routes: Routes = [
  {
    path: '',
    component: CashInTransferMoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashInTransferMoneyPageRoutingModule {}
