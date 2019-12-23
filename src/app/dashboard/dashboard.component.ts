import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  todoes: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodoes();
  }

  getTodoes(): void {
    this.todoService.getTodoes()
      .subscribe(todoes => this.todoes = todoes.slice(1, 5));
  }
}
