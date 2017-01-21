import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RunningPage } from '../running/running';

/*
  Generated class for the Exercise page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html'
})
export class ExercisePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisePage');
  }

startRunning(){
  this.navCtrl.push(RunningPage);
}

}
