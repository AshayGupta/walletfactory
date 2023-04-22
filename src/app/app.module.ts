import { ModalCtrlService } from './../providers/plugin-services/modal-ctrl.service';
import { ToastService } from './../providers/plugin-services/toast.service';
import { LoaderService } from './../providers/plugin-services/loader.service';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SafePipe } from './safe.pipe'; 

@NgModule({
  declarations: [AppComponent, SafePipe],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ToastService,
    LoaderService,
    ModalCtrlService
    // InAppBrowser
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
