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
export var RoutesComponent = (function () {
    function RoutesComponent(digitransitService, router) {
        var _this = this;
        this.digitransitService = digitransitService;
        this.router = router;
        this.routes = [];
        this.showBus = function (line) {
            console.log(line);
            _this.digitransitService.getBus(line).subscribe(function (resp) {
                console.log(resp);
                // console.log(resp[Object.keys(resp)[0]].VP.long);
                try {
                    var lat = resp[Object.keys(resp)[0]].VP.lat;
                    var lon = resp[Object.keys(resp)[0]].VP.long;
                    window.open("https://maps.google.fi/maps/place/" + lat + "+" + lon);
                }
                catch (e) {
                    alert('Not in transit.');
                }
            });
        };
    }
    RoutesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('user') === null) {
            this.router.navigate(['setup']);
        }
        else {
            this.user = JSON.parse(localStorage.getItem('user'));
            this.digitransitService.setStop(this.user.stop);
            this.digitransitService.getRoutes().subscribe(function (res) {
                console.log(res.data.stops[0].patterns);
                _this.routes = res.data.stops[0].patterns;
                _this.routes.map(function (reitti) {
                    reitti.route.gtfsId = reitti.route.gtfsId.replace('HSL:', '');
                });
            });
        }
    };
    RoutesComponent = __decorate([
        Component({
            selector: 'app-routes',
            templateUrl: './routes.component.html',
            styleUrls: ['./routes.component.scss']
        }), 
        __metadata('design:paramtypes', [DigitransitService, Router])
    ], RoutesComponent);
    return RoutesComponent;
}());
//# sourceMappingURL=/Users/ilkkamtk/Desktop/Week4l7/src/app/routes/routes.component.js.map