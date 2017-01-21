import { Component } from '@angular/core';

/*
  Generated class for the Time component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'time',
  templateUrl: 'time.html'
})
export class TimeComponent {

  text: string;

  constructor() {
    console.log('Hello Time Component');
    this.text = 'Hello World';
  }

}
