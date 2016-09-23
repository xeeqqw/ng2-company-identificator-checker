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
var INNValidator = (function () {
    function INNValidator() {
    }
    INNValidator.prototype.validate = function (control) {
        if (!control.value)
            return null;
        var innArray = ("" + control.value).split("").map(Number);
        var result = false;
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
    };
    INNValidator = __decorate([
        core_1.Directive({
            selector: '[inn-validator]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: INNValidator, multi: true }]
        }), 
        __metadata('design:paramtypes', [])
    ], INNValidator);
    return INNValidator;
}());
exports.INNValidator = INNValidator;
//# sourceMappingURL=inn-validator.js.map