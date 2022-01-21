import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosAppRoutingModule } from './todos-app-routing.module';
import { TodosComponent } from './todos/todos.component';


@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosAppRoutingModule
  ]
})
export class TodosAppModule { }
