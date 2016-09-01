import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChallengePage } from '../challenge/challenge';
import { ChallengeProvider } from '../../providers/challenge/challenge';
import { LevelIndicator } from '../../components/level-indicator/level-indicator';

/*
  Generated class for the LevelsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/levels/levels.html',
  directives: [ LevelIndicator ]
})
export class LevelsPage {
  currentLevel: number
  levels = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  constructor(
    private navCtrl: NavController,
    private params: NavParams,
    private challengeProvider: ChallengeProvider
    ) {
    this.currentLevel = params.get("level");
  }

  onClickEngage(event) {
    this.challengeProvider.getRandom(this.currentLevel).subscribe(
      challenge => this.navCtrl.push(ChallengePage, {id: challenge.id })
     )
  }
}
