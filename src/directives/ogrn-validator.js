"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var OGRNValidator = (function () {
    function OGRNValidator() {
    }
    OGRNValidator.prototype.validate = function (control) {
        if (!control.value)
            return null;
        var ogrn = +control.value;
        var ogrnArray = ogrn.toString().split("").map(Number);
        var result = false;
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
    };
    OGRNValidator = __decorate([
        core_1.Directive({
            selector: '[ogrn-validator]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: OGRNValidator, multi: true }]
        }), 
        __metadata('design:paramtypes', [])
    ], OGRNValidator);
    return OGRNValidator;
}());
exports.OGRNValidator = OGRNValidator;
//# sourceMappingURL=ogrn-validator.js.map