import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private todoService: TodoService
  ) {}
  addForm: FormGroup;
  @Output()
  createUsercontact = new EventEmitter<Todo>();

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  onSubmit() {
    this.todoService.create(this.addForm.value);
    this.router.navigate(['']);
  }

  onCancel() {
    this.router.navigate(['']);
  }
}
