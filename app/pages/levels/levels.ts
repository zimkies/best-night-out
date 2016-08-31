import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChallengePage } from '../challenge/challenge';

/*
  Generated class for the LevelsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/levels/levels.html',
})
export class LevelsPage {
  currentLevel: number
  levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  constructor(private navCtrl: NavController, params: NavParams) {
    this.currentLevel = params.get("level");
  }

  onClickEngage(event) {
    return this.navCtrl.push(ChallengePage, {
      id: 0
    });
  }
}
