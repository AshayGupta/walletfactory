import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CreateProfileAddressPageRoutingModule } from './create-profile-address-routing.module';
import { CreateProfileAddressPage } from './create-profile-address.page';
import { ProfileService } from 'src/providers/services/main-module-services/profile.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule ,DatePipe,   
     IonicModule,
    CreateProfileAddressPageRoutingModule
  ],
  declarations: [CreateProfileAddressPage],
  providers: [ProfileService]

})
export class CreateProfileAddressPageModule {}
