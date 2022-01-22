import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'pomodoro',
        loadChildren: () => import('./../modules/pomodoro/pomodoro.module').then(m => m.PomodoroModule)
      },
      {
        path: 'todo',
        loadChildren: () => import('./../modules/todo/todo.module').then(m => m.TodoModule)
      },
      {
        path: '**',
        redirectTo: 'error/404'
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
