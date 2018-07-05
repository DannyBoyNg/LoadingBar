import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material';
import { LoadingBarComponent } from './loading-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
  ],
  declarations: [LoadingBarComponent],
  exports: [LoadingBarComponent]
})
export class LoadingBarModule { }
