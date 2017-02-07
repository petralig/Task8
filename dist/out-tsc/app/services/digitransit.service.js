var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
export var DigitransitService = (function () {
    function DigitransitService(http) {
        var _this = this;
        this.http = http;
        this.url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
        this.setStop = function (stop) {
            _this.stop = stop;
        };
        this.getStop = function () {
            return _this.stop;
        };
        this.getRoutes = function () {
            var data = "{\n                    stops(name: \"" + _this.stop + "\") {\n                      name\n                      patterns {\n                        name\n                        route {\n                          gtfsId\n                        }\n                      }\n                    }\n                  }";
            var headers = new Headers({ 'Content-Type': 'application/graphql' });
            var options = new RequestOptions({ headers: headers });
            return _this.http.post(_this.url, data, options).map(function (resp) { return resp.json(); });
        };
        // advanced
        this.getBus = function (line) {
            return _this.http.get("http://api.digitransit.fi/realtime/vehicle-positions/v1/hfp/journey/bus/+/" + line + "/#")
                .map(function (resp) { return resp.json(); });
        };
    }
    DigitransitService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], DigitransitService);
    return DigitransitService;
}());
//# sourceMappingURL=/Users/ilkkamtk/Desktop/Week4l7/src/app/services/digitransit.service.js.map