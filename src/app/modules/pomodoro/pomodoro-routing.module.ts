import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './components/clock/clock.component';
import { PomodoroComponent } from './pomodoro.component';

const routes: Routes = [
  {
    path: '',
    component: PomodoroComponent,
    children: [
      {
        path: '',
        redirectTo: 'clock',
        pathMatch: 'full'
      },
      {
        path: 'clock',
        component: ClockComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PomodoroRoutingModule { }
