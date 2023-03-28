import { FormControl } from '@angular/forms';

export class PartialAmountValidator {

    static isValid(control: FormControl): any {

        // console.log('control.value -> ', parseFloat(control.value))
        if (isNaN(control.value) || parseFloat(control.value) == 0) {
            return {
                partialAmount :"Partial withdrawal amount cannot be 0"
            };
        }

        return null;
    }

}
