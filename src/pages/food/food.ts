import { Slides } from 'ionic-angular/es2015';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Food page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-food',
  templateUrl: 'food.html'
})
export class FoodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  slides = [
    {
      title: "Breakfast",
      image: "../assets/1.jpg"
    },
    {
      title: "Lunch",
      image: "../assets/2.jpg"
    },
    {
      title: "Dinner",
      image: "../assets/3.jpg"
    }, {
      title: "Others",
      image: "../assets/4.jpg"
    }
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }
  goHome() {
    this.navCtrl.pop();
  }

}
