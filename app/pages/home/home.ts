import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {InstructionsPage} from '../instructions/instructions';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {
  }

  openInstructionsPage(event) {
    return this.navCtrl.push(InstructionsPage);
  }
}
