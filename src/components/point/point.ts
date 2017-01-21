import { Component } from '@angular/core';

/*
  Generated class for the Point component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'point',
  templateUrl: 'point.html'
})
export class PointComponent {

  text: string;

  constructor() {
    console.log('Hello Point Component');
    this.text = 'Hello World';
  }

}
