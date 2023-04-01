import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MxaccountPage } from './mxaccount.page';

const routes: Routes = [
  {
    path: '',
    component: MxaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MxaccountPageRoutingModule {}
