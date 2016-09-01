import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {InstructionsPage} from '../instructions/instructions';
import {SubmissionsPage} from '../submissions/submissions';
import {LevelsPage} from '../levels/levels';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {
  }

  openInstructionsPage(event) {
    return this.navCtrl.push(InstructionsPage);
  }

  openSubmissionsPage(event) {
    return this.navCtrl.push(SubmissionsPage);
  }

  openStartPage(event) {
    return this.navCtrl.push(LevelsPage, {
      level: 1
    });
  }
}
