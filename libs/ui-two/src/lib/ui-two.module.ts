import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoComponent } from './two/two.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TwoComponent],
  exports: [TwoComponent],
})
export class UiTwoModule {}
