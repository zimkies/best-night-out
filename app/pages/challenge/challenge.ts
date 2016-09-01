import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LevelsPage } from '../../pages/levels/levels';
import { Levels } from '../../models/levels';
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
  responseCopy: string;

  constructor(
    private navCtrl: NavController,
    private params: NavParams,
    private challengeProvider: ChallengeProvider

    ) {
    this.challenge_id = params.get('id')
  }

  ngOnInit() {
    this.challengeProvider.get(this.challenge_id).subscribe(
      challenge => this.challenge = challenge
    )
  }

  onClickFail(event) {
    this.response = 'failed';
    this.responseCopy = this.getLevelResponseCopy(this.response)
  }

  onClickConfirmFail(event) {
    this.challengeProvider.saveResponse(
      this.challenge_id, this.response
     ).subscribe(response =>
       this.navCtrl.push(LevelsPage, {level: this.challenge.previousLevel()})
     )
  }

  onClickCancelFail(event) {
    this.response = undefined;
  }

  onClickNail(event) {
    this.response = 'nailed';
    this.responseCopy = this.getLevelResponseCopy(this.response)
    this.challengeProvider.saveResponse(this.challenge_id, this.response
     ).subscribe(response => console.log(response))
  }

  onClickLevelUp(event) {
    return this.navCtrl.push(LevelsPage, {
      level: this.challenge.nextLevel()
    });
  }

  // Randomly choose reponse copy for that level
  private getLevelResponseCopy(response) {
    let level = Levels.find(level => level.level == this.challenge.level);
    if (response == 'nailed') {
      var responses = level.nailed_copy
    } else {
      var responses = level.failed_copy
    }

    console.log("responses", responses);

    if (responses.length > 0) {
      return responses[Math.floor(Math.random() * responses.length)];
    } else {
      return undefined
    }
  }

}
