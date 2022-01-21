import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todos',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./todos-app/todos-app.module').then((m) => m.TodosAppModule)
  },
  {
    path: '',
    pathMatch: 'full',
    // canActivate: [AuthGuard],
    redirectTo: '/todos'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
