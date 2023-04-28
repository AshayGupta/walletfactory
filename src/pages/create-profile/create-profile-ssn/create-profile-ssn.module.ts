import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CreateProfileSsnPageRoutingModule } from './create-profile-ssn-routing.module';

import { CreateProfileSsnPage } from './create-profile-ssn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule ,DatePipe,   
    IonicModule,
    CreateProfileSsnPageRoutingModule
  ],
  declarations: [CreateProfileSsnPage]
})
export class CreateProfileSsnPageModule {}
