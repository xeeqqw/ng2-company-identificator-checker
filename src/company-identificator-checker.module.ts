import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { INNValidator } from './directives/inn-validator';
import { OGRNValidator } from './directives/ogrn-validator';

let directives = [
    INNValidator,
    OGRNValidator
]

@NgModule({
    imports: [BrowserModule],
    declarations: [
        ...directives
    ],
    exports: [
        ...directives
    ]
})
export class CompanyIdChecherModule { }