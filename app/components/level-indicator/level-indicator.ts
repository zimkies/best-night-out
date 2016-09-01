import { Component, Input } from '@angular/core';

/*
  Generated class for the LevelIndicator component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'level-indicator',
  templateUrl: 'build/components/level-indicator/level-indicator.html'
})
export class LevelIndicator {
  @Input()
  currentLevel: number;

  text: string;
  levels = [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
