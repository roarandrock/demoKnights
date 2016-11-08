import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import {FuturePage} from '../pages/future/future';

@Component({
  selector: 'page-timemachine',
  templateUrl: 'timemachine.html'
})
export class TimemachinePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TimemachinePage Page');
  }

/*goToFuture() {
  this.navCtrl.push(FuturePage)
}*/

}
