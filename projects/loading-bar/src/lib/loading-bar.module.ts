import { NgModule } from '@angular/core';
import { LoadingBarComponent } from './loading-bar.component';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [LoadingBarComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
  ],
  exports: [LoadingBarComponent]
})
export class LoadingBarModule { }
