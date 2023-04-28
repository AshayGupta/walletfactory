import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProfileAddressPage } from './create-profile-address.page';

const routes: Routes = [
  {
    path: '',
    component: CreateProfileAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateProfileAddressPageRoutingModule {}
