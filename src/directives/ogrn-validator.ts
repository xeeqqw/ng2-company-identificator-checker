import {Directive, Provider, forwardRef} from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl} from '@angular/forms';

@Directive({
    selector: '[ogrn-validator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: OGRNValidator, multi: true }]
})
export class OGRNValidator implements Validator {
    constructor() { }
    validate(control: FormControl): { [key: string]: any } {
        if (!control.value)
            return null;

        let ogrn = +control.value;
        let ogrnArray: number[] = ogrn.toString().split("").map(Number);

        let result: boolean = false;

        if (ogrnArray.length == 13) {
                var r = Math.floor((ogrn / 10) % 11);
                var d = (r == 10) ? 0 : r;

                result = ogrnArray[12] == d;
        }
        else if (ogrnArray.length == 15) {
                var r = Math.floor((ogrn / 10) % 13);
                var d = r % 10;

                result = ogrnArray[14] == d;
        }

        return result == true ? null : {
            validateOGRN: {
                valid: false
            }
        };
    }
}