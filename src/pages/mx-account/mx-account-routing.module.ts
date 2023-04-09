import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MxAccountPage } from './mx-account.page';

const routes: Routes = [
  {
    path: '',
    component: MxAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MxAccountPageRoutingModule {}
