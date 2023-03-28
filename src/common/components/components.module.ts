import { NgModule } from '@angular/core';
import { PageSegmentsComponent } from './page-segments/page-segments';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header';
import { PaymentMethodComponent } from './payment-method/payment-method';

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
		AppHeaderComponent,
		PaymentMethodComponent
	]
})
export class ComponentsModule { }
