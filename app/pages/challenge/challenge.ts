import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Challenge } from '../../models/challenge';
import { ChallengeProvider } from '../../providers/challenge/challenge';

/*
  Generated class for the ChallengePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/challenge/challenge.html',
})
export class ChallengePage {
  challenge_id: number;
  challenge: any;
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
  }

  onClickCancelFail(event) {
    this.response = undefined;
  }

  onClickNail(event) {
    this.response = 'nailed';
  }

  onClickLevelUp(event) {
  }
}
