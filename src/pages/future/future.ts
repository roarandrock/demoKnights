import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Future page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-future',
  templateUrl: 'future.html'
})
export class FuturePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FuturePage Page');
  }

}
