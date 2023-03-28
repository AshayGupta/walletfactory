import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillPayCategoryPageRoutingModule } from './bill-pay-category-routing.module';

import { BillPayCategoryPage } from './bill-pay-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillPayCategoryPageRoutingModule
  ],
  declarations: [BillPayCategoryPage]
})
export class BillPayCategoryPageModule {}
