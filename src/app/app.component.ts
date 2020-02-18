import { Component } from '@angular/core';
import { LoadingBarService } from 'projects/loading-bar/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loadingBar: LoadingBarService) {}

  show() {
    this.loadingBar.show();
  }

  hide() {
    this.loadingBar.hide();
  }

  resetAll() {
    this.loadingBar.resetAll();
  }
}
