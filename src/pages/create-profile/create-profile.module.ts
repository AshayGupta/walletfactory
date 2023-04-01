import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CreateProfilePageRoutingModule } from './create-profile-routing.module';
import { CreateProfilePage } from './create-profile.page';
import { ProfileService } from 'src/providers/services/main-module-services/profile.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule ,DatePipe,
    IonicModule,
    CreateProfilePageRoutingModule
  ],
  declarations: [CreateProfilePage],
  providers: [ProfileService]
})
export class CreateProfilePageModule {}
