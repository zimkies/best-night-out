import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Challenge } from '../../models/challenge'

const CHALLENGES: Challenge[] = [
  new Challenge(1, "Put your hands in the air like you just don't care.<br/> <br/>For 10 seconds", 1),
  new Challenge(2, "Wait, who can say penis louder?", 2),
  new Challenge(3, "Wait, who can say penis louder?", 3),
  new Challenge(4, "Wait, who can say penis louder?", 4),
  new Challenge(5, "Wait, who can say penis louder?", 5),
  new Challenge(6, "Wait, who can say penis louder?", 6),
  new Challenge(7, "Wait, who can say penis louder?", 7),
  new Challenge(8, "Wait, who can say penis louder?", 8),
  new Challenge(9, "Wait, who can say penis louder 2?", 9)
];

/*
  Generated class for the Challenge provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ChallengeProvider {

  constructor(private http: Http) {}

  getRandom(level) {
    return CHALLENGES.find(challenge => challenge.level === level);
  }

  get(id) {
    return CHALLENGES.find(challenge => challenge.id === id);
  }
}

