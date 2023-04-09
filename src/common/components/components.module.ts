import { NgModule } from '@angular/core';
import { PageSegmentsComponent } from './page-segments/page-segments';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header';

@NgModule({
	declarations: [
		PageSegmentsComponent,
		AppHeaderComponent,
		PaymentMethodComponent
	],
	imports: [
		IonicModule,
		CommonModule,
	],
	exports: [
		PageSegmentsComponent,
		AppHeaderComponent
	]
})
export class ComponentsModule { }
