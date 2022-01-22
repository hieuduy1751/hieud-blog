import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PomodoroRoutingModule } from './pomodoro-routing.module';
import { PomodoroComponent } from './pomodoro.component';
import { ClockComponent } from './components/clock/clock.component';


@NgModule({
  declarations: [
    PomodoroComponent,
    ClockComponent
  ],
  imports: [
    CommonModule,
    PomodoroRoutingModule
  ]
})
export class PomodoroModule { }
