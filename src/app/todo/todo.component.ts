import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  usercont: Todo;

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
    this.todos = this.todoService.getall();
  }

  editTodo(todo: Todo) {
    console.log(todo);
    localStorage.removeItem('editTodoId');
    localStorage.setItem('editTodoId', todo.id.toString());
    this.router.navigate(['edit']);
  }

  deleteTodo(todo: Todo) {
    this.todoService.delete(todo);
    this.todos = this.todoService.getall();

  }

  detailTodo(todo: Todo) {
    localStorage.setItem('Id', todo.id.toString());
  }


}
