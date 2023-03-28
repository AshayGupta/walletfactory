import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransapopupPage } from './transapopup.page';

const routes: Routes = [
  {
    path: '',
    component: TransapopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransapopupPageRoutingModule {}
