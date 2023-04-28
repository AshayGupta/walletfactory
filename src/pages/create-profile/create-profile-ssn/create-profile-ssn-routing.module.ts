import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProfileSsnPage } from './create-profile-ssn.page';

const routes: Routes = [
  {
    path: '',
    component: CreateProfileSsnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateProfileSsnPageRoutingModule {}
