import { Directive, Provider, forwardRef} from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl} from '@angular/forms';

@Directive({
    selector: '[inn-validator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: INNValidator, multi: true }]
})
export class INNValidator implements Validator {
    constructor() { }
    validate(control: FormControl): { [key: string]: any } {
        if (!control.value)
            return null;

        let innArray: number[] = (""+control.value).split("").map(Number);

        let result: boolean = false;

        if (innArray.length > 0) {
            if (innArray.length == 10) {
                var d = 0;
                var checkSum = [2, 4, 10, 3, 5, 9, 4, 6, 8];

                for (var i = 0; i < checkSum.length; i++) {
                    d += checkSum[i] * innArray[i];
                }

                result = ((d % 11) % 10) == innArray[9];
            }
            else if (innArray.length == 12) {
                var d_11 = 0;
                var d_12 = 0;
                var checkSum_11 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
                var checkSum_12 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
                var i = 0;

                for (i = 0; i < checkSum_11.length; i++) {
                    d_11 += checkSum_11[i] * innArray[i];
                }

                for (i = 0; i < checkSum_12.length; i++) {
                    d_12 += checkSum_12[i] * innArray[i];
                }

                result = ((d_11 % 11) % 10) == innArray[10] && ((d_12 % 11) % 10) == innArray[11];
            }
        }

        return result == true ? null : {
            validateINN: {
                valid: false
            }
        };
    }
}