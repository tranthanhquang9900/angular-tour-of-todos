import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoes',
  templateUrl: './todoes.component.html',
  styleUrls: ['./todoes.component.css']
})
export class TodoesComponent implements OnInit {
  todoes: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodoes();
    //this.user = {"email":"","password":""};
  }

  getTodoes(): void {
    this.todoService.getTodoes()
    .subscribe(todoes => this.todoes = todoes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.todoService.addTodo({ name } as Todo)
      .subscribe(todo => {
        this.todoes.push(todo);
      });
  }

  delete(todo: Todo): void {
    this.todoes = this.todoes.filter(h => h !== todo);
    this.todoService.deleteTodo(todo).subscribe();
  }

}
