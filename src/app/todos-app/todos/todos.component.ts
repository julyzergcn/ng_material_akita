import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/state/todos/todo.model';
import { TodosQuery } from 'src/app/state/todos/todos.query';
import { TodosService } from 'src/app/state/todos/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]> = this.todosQuery.selectAll();
  isLoading$: Observable<boolean> = this.todosQuery.selectLoading();

  constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery
  ) { }

  ngOnInit(): void {
    this.todosService.get().subscribe();
  }

}
