import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(private navCtrl: NavController, params: NavParams) {
    this.challenge_id = params.get('id')
  }
}
