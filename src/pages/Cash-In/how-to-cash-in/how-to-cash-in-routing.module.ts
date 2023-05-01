import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowToCashInPage } from './how-to-cash-in.page';

const routes: Routes = [
  {
    path: '',
    component: HowToCashInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowToCashInPageRoutingModule {}
