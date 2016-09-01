import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {InstructionsPage} from '../instructions/instructions';
import {SubmissionsPage} from '../submissions/submissions';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = InstructionsPage;
    this.tab3Root = SubmissionsPage;
  }
}
