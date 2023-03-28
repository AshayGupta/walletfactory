import { FormControl } from '@angular/forms';

export class LoanAmountValidator {

    static isValid(control: FormControl): any {

        // console.log('control.value -> ', parseFloat(control.value))
        if (isNaN(control.value) || parseFloat(control.value) == 0) {
            return {
                loanAmount: 'Loan Amount cannot be 0'
            };
        }

        return null;
    }

}