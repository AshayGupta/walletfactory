import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterMobileNumberPage } from './enter-mobile-number.page';

const routes: Routes = [
  {
    path: '',
    component: EnterMobileNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterMobileNumberPageRoutingModule {}
