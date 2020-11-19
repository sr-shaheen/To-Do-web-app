import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private todoService: TodoService
  ) {}
  editForm: FormGroup;
  todocontact: Todo;

  ngOnInit() {
    const todoId = localStorage.getItem('editTodoId');
    if (!todoId) {
      alert('Invalid action.');
      this.router.navigate(['']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
    const data = this.todoService.getTodoById(+todoId);
    this.editForm.setValue(data);
  }

  isInvalid(name: string) {
    const control = this.editForm.get(name);
    return control.invalid && control.dirty;
  }

  onSubmit() {
    this.todoService.update(this.editForm.value);
    this.router.navigate(['']);
  }

  onCancel() {
    this.router.navigate(['']);
  }
}
