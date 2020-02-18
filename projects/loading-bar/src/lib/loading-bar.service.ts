import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LoadingBarState } from './loading-bar.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoadingBarService {

  private loadingBarSubject = new Subject<LoadingBarState>();
  loadingBarState$: Observable<LoadingBarState> = this.loadingBarSubject.asObservable();

  constructor() { }

  show(id?: string) {
    const ls: LoadingBarState = {
      id,
      state: 'show'
    };
    this.loadingBarSubject.next(ls);
  }

  hide(id?: string) {
    const ls: LoadingBarState = {
      id,
      state: 'hide'
    };
    this.loadingBarSubject.next(ls);
  }

  resetAll() {
    const ls: LoadingBarState = {
      state: 'resetAll'
    };
    this.loadingBarSubject.next(ls);
  }
}
