import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpScreenPageRoutingModule } from './otp-screen-routing.module';

import { OtpScreenPage } from './otp-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    OtpScreenPageRoutingModule
  ],
  declarations: [OtpScreenPage]
})
export class OtpScreenPageModule {}
