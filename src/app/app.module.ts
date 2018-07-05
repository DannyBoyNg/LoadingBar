import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadingBarModule } from 'projects/loading-bar/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadingBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
