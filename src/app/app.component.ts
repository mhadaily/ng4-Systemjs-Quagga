import { Component, OnInit } from '@angular/core';
import * as Quagga from 'quagga';

@Component({
  selector: 'my-app',
  template: `<div id="interactive" class="viewport clearfix" #interactive></div>`
})

export class AppComponent implements OnInit {

  CameraIsAvailable: boolean = false;
  quaggaConfig: any;

  constructor() {
    this.quaggaConfig = {
      locator: {
        patchSize: "medium",
        halfSample: false
      },
      inputStream:{
      type: "LiveStream",
      constraints: {
        width: {min: 640},
        height: {min: 480},
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

  ngOnInit() {
    console.log('onInit de AppComponent');
    this.CameraIsAvailable = (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function');
    if (this.CameraIsAvailable) {
      Quagga.init(this.quaggaConfig, (err : any) => {
        if (err) {
          throw new Error(err);
        }
        console.log("Initialization finished. Ready to start, WORKING YAYAY!!");
        Quagga.start();
      });
    }

  }
}
