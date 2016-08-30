import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
  templateUrl: 'build/pages/instructions/instructions.html'
})
export class InstructionsPage {
  constructor(private navCtrl: NavController) {
  }

  openHomePage(event) {
    this.navCtrl.push(HomePage)

  }
}
