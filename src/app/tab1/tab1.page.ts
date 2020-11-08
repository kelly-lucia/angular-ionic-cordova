import { Component } from '@angular/core';

declare const cordova;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  onClick(){
    cordova.plugins.hello.coolMethod('参数', (succ) => {
      console.log(succ);
  }, (err) => {
      console.log(err);
  });

  }

}
