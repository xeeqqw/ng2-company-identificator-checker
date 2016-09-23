import { Validator, FormControl } from '@angular/forms';
export declare class OGRNValidator implements Validator {
    constructor();
    validate(control: FormControl): {
        [key: string]: any;
    };
}
