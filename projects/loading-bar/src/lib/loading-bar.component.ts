import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingBarService } from './loading-bar.service';
import { LoadingBarState } from './loading-bar.interfaces';

@Component({
  selector: 'dbn-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent implements OnInit, OnDestroy {

  @Input() id: string|undefined;
  @Input() color: 'primary'|'accent'|'warn'|undefined;
  referenceCounter = 0;
  private subscription: Subscription|undefined;

  constructor(
    private loadingBarService: LoadingBarService
  ) { }

  ngOnInit() {
    this.subscription = this.loadingBarService.loadingBarState$
    .subscribe((x: LoadingBarState) => {
      if (x.state === 'resetAll') {
        this.referenceCounter = 0;
        return;
      }
      if (x.id !== this.id) {return; }
      switch (x.state) {
        case 'show':
          this.referenceCounter++;
          break;
        case 'hide':
          if (this.referenceCounter > 0) {this.referenceCounter--; }
          break;
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription != null) {this.subscription.unsubscribe(); }
  }
}
