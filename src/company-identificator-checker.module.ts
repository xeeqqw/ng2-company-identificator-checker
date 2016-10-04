import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INNValidator } from './directives/inn-validator';
import { OGRNValidator } from './directives/ogrn-validator';

let directives = [
    INNValidator,
    OGRNValidator
]

@NgModule({
    imports: [CommonModule],
    declarations: [
        ...directives
    ],
    exports: [
        ...directives
    ]
})
export class CompanyIdChecherModule { }