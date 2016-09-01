import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LevelsPage } from '../../pages/levels/levels';
import { Challenge } from '../../models/challenge';
import { ChallengeProvider } from '../../providers/challenge/challenge';
import { LevelIndicator } from '../../components/level-indicator/level-indicator';

/*
  Generated class for the ChallengePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/challenge/challenge.html',
  directives: [ LevelIndicator ]
})
export class ChallengePage {
  challenge_id: number;
  challenge: Challenge;
  response: any;

  constructor(
    private navCtrl: NavController,
    private params: NavParams,
    private challengeProvider: ChallengeProvider

    ) {
    this.challenge_id = params.get('id')
    this.challenge = challengeProvider.get(this.challenge_id)
  }

  onClickFail(event) {
    this.response = 'failed';
  }

  onClickConfirmFail(event) {
    return this.navCtrl.push(LevelsPage, {
      level: this.challenge.previousLevel()
    });
  }

  onClickCancelFail(event) {
    this.response = undefined;
  }

  onClickNail(event) {
    this.response = 'nailed';
  }

  onClickLevelUp(event) {
    return this.navCtrl.push(LevelsPage, {
      level: this.challenge.nextLevel()
    });
  }
}
