import { Component,ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { RecordExercisePage } from '../../pages/record-exercise/record-exercise';
import { RecordFoodPage } from '../../pages/record-food/record-food';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
pages: Array<{ name: string, component: any }>;

  constructor(public platform: Platform) {
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
    this.Platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
