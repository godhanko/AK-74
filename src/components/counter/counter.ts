import { Component } from '@angular/core';

/*
  Generated class for the Counter component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'counter',
  templateUrl: 'counter.html'
})
export class CounterComponent {

  text: string;

  constructor() {
    console.log('Hello Counter Component');
    this.text = 'Hello World';
  }

}
