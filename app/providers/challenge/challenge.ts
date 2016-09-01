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

  constructor(private http: Http) {}

  getRandom(level) {
    return Observable.create(observer => {
      observer.next(
        CHALLENGES_JSON.map(challenge_json => new Challenge(
            challenge_json['id'],
            challenge_json['content'],
            challenge_json['level']
          )).find(challenge => challenge.level === level)
       );
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
}
