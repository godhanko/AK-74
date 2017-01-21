import { Component, Input } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { RecordExercisePage } from '../../pages/record-exercise/record-exercise';
import { RecordFoodPage } from '../../pages/record-food/record-food';


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
  pages: Array<{ name: string, component: any }>;

  constructor(public platform: Platform) {
    console.log('Nigga Recordmenu Component');
    this.initializeApp();
    this.pages = [{
      name: "RecordExercise",
      component: RecordExercisePage
    }, {
      name: "RecordFood",
      component: RecordFoodPage
    }]//Side-menu list
  }
  initializeApp() {

  }


}
