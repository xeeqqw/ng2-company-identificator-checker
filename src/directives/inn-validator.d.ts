import { Validator, FormControl } from '@angular/forms';
export declare class INNValidator implements Validator {
    constructor();
    validate(control: FormControl): {
        [key: string]: any;
    };
}
