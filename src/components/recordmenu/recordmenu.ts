import { Component,Input } from '@angular/core';

/*
  Generated class for the Recordmenu component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'recordmenu',
  templateUrl: 'recordmenu.html'
})
export class RecordmenuComponent {
 @Input() content;
  text: string;

  constructor() {
    console.log('Hello Recordmenu Component');
  }

contents=[{
  name:"AK47"
},{
  name:"FN FAL"
}]

}
