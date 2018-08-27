import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { DayPipe } from './day.pipe';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ SafePipe , DayPipe],
  exports:[SafePipe ,DayPipe]
})
export class PipeModule { }
