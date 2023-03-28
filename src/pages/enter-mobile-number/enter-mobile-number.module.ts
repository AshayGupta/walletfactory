import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterMobileNumberPageRoutingModule } from './enter-mobile-number-routing.module';

import { EnterMobileNumberPage } from './enter-mobile-number.page';

import { IonIntlTelInputModule } from 'ion-intl-tel-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonIntlTelInputModule,    
    IonicModule,
    EnterMobileNumberPageRoutingModule
  ],
  declarations: [EnterMobileNumberPage]
})
export class EnterMobileNumberPageModule {}
