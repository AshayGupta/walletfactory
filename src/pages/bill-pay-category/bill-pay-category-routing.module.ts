import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillPayCategoryPage } from './bill-pay-category.page';

const routes: Routes = [
  {
    path: '',
    component: BillPayCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillPayCategoryPageRoutingModule {}
