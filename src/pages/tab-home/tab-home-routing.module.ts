import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabhomePage } from './tab-home.page';

const routes: Routes = [
  {
    path: '',
    component: TabhomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabhomePageRoutingModule {}
