var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DigitransitService } from "../services/digitransit.service";
import { Router } from "@angular/router";
export var SetupComponent = (function () {
    function SetupComponent(digitransitService, router) {
        var _this = this;
        this.digitransitService = digitransitService;
        this.router = router;
        this.user = {};
        this.setPrefrences = function (formValues) {
            console.log(formValues);
            localStorage.setItem('user', JSON.stringify(formValues));
            _this.router.navigate(['routes']);
        };
        this.removePrefrences = function () {
            localStorage.removeItem('user');
            _this.user = {};
        };
    }
    SetupComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user') !== null)
            this.user = JSON.parse(localStorage.getItem('user'));
    };
    SetupComponent = __decorate([
        Component({
            selector: 'app-setup',
            templateUrl: './setup.component.html',
            styleUrls: ['./setup.component.scss']
        }), 
        __metadata('design:paramtypes', [DigitransitService, Router])
    ], SetupComponent);
    return SetupComponent;
}());
//# sourceMappingURL=/Users/ilkkamtk/Desktop/Week4l7/src/app/setup/setup.component.js.map