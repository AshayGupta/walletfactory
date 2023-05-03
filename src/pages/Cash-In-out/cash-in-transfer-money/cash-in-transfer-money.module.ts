import { SendMoneyService } from '../../../providers/services/main-module-services/send-money.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CashInTransferMoneyPageRoutingModule } from './cash-in-transfer-money-routing.module';
import { CashInTransferMoneyPage } from './cash-in-transfer-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashInTransferMoneyPageRoutingModule
  ],
  declarations: [CashInTransferMoneyPage],
  providers: [
    SendMoneyService
  ]
})
export class CashInTransferMoneyPageModule {}
