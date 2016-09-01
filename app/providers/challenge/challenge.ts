import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Challenge provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ChallengeProvider {

  constructor(private http: Http) {}

  getRandom(level) {
    return {
      id: 1,
      content: "Put your hands in the air like you just don't care.<br/><br/>For 10 seconds"
    }
  }

  get(id) {
    return {
      id: 1,
      content: "Put your hands in the air like you just don't care.<br/> <br/>For 10 seconds"
    }
  }
}

