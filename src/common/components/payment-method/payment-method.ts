import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'payment-method',
  templateUrl: 'payment-method.html'
})
export class PaymentMethodComponent {

  @Input('segmentInput') segmentData;
  @Output('segmentOutput') segmentOutput = new EventEmitter();

  constructor() {
    console.log('Hello PaymentMethodComponent Component');
  }

  segmentClicked(id: string) {
    this.segmentOutput.emit(id);
  }

}
