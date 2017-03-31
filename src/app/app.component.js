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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Quagga = require("quagga");
var AppComponent = (function () {
    function AppComponent() {
        this.CameraIsAvailable = false;
        this.quaggaConfig = {
            locator: {
                patchSize: "medium",
                halfSample: false
            },
            inputStream: {
                type: "LiveStream",
                constraints: {
                    width: { min: 640 },
                    height: { min: 480 },
                    facingMode: "environment",
                    aspectRatio: {
                        min: 1,
                        max: 2
                    }
                }
            },
            numOfWorkers: 1,
            decoder: {
                readers: [
                    'ean_reader',
                    'code_128_reader',
                    'ean_8_reader',
                    'code_39_reader',
                    'code_39_vin_reader',
                    'codabar_reader',
                    'upc_reader',
                    'upc_e_reader',
                    'i2of5_reader'
                ]
            },
            locate: true
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('onInit de AppComponent');
        this.CameraIsAvailable = (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function');
        if (this.CameraIsAvailable) {
            Quagga.init(this.quaggaConfig, function (err) {
                if (err) {
                    throw new Error(err);
                }
                console.log("Initialization finished. Ready to start, WORKING YAYAY!!");
                Quagga.start();
            });
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div id=\"interactive\" class=\"viewport clearfix\" #interactive></div>"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map