import { Component } from '@angular/core';

/*
  Generated class for the CalLose component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'cal-lose',
  templateUrl: 'cal-lose.html'
})
export class CalLoseComponent {

  text: string;

  constructor() {
    console.log('Hello CalLose Component');
    this.text = 'Hello World';
  }

}
