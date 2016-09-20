import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Challenge } from '../../models/challenge'
import { CHALLENGES_JSON } from './mock-challenges'

/*
  Generated class for the Challenge provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ChallengeProvider {
  baseUrl = 'http://localhost:3000/api/'

  constructor(private http: Http) {}

  getRandom(level) {
    return this.http.get(this.baseUrl + "challenges/random" + "?level=" + level)
      .map(res => new Challenge(
          res.json()['id'],
          res.json()['content'],
          res.json()['level']
        )
      ).catch(this.handleError);
  }

  getRandomMock(level) {
    return Observable.create(observer => {
      let challenges: Challenge[] = CHALLENGES_JSON.map(challenge_json => new Challenge(
            challenge_json['id'],
            challenge_json['content'],
            challenge_json['level']
          )).filter(challenge => challenge.level === level);

      console.log("getting random")
      challenges[Math.floor(Math.random() * challenges.length)];

      observer.next(challenges[Math.floor(Math.random() * challenges.length)]);
      observer.complete();
    })
  }

  get(id) {
    return Observable.create(observer => {
      observer.next(
        CHALLENGES_JSON.map(challenge_json => new Challenge(
            challenge_json['id'],
            challenge_json['content'],
            challenge_json['level']
          )).find(challenge => challenge.id === id)
       );
      observer.complete();
    })
  }

  saveResponse(id, response: string) {
    return Observable.create(observer => {
      observer.next(console.log("Saving response:", response))
      observer.complete();
    })
  }

  handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }
}
