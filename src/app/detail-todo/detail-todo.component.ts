import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent implements OnInit {
  usercontacts: Todo[]; // Array<string>
  todo: Todo;
  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {
    const todoId = localStorage.getItem('Id');
    const data = this.todoService.getTodoById(+todoId);
    this.dataProperty(data);
  }
  dataProperty(data: Todo) {
    this.todo = data;
  }

  onCancel() {
    this.router.navigate(['']);
  }
}
