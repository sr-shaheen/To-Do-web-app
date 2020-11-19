import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = this.getTodos(); // modified
  }

  create(todo: Todo) {
    const itemIndex = this.todos.length;
    todo.id = this.getnextId();
    const todos = this.getTodos();
    todos.push(todo);
    this.setLocalStorageTodos(todos);
  }

  getall(): Todo[] {
    const todos = this.getTodos();
    return todos;
  }

  delete(todo: Todo) {
    console.log('Id' + todo.id);
    let todos = this.getTodos();
    todos = todos.filter(item => item.id !== todo.id);
    this.setLocalStorageTodos(todos);
  }

  update(todo: Todo) {
    const _todo = todo;
    this.delete(todo);
    const todos = this.getTodos();
    todos.push(_todo);
    this.setLocalStorageTodos(todos);
  }

  getTodoById(id: number) {
    this.todos = this.getTodos();
    const itemIndex = this.todos.findIndex(item => item.id === id);
    return this.todos[itemIndex];
  }

  getnextId(): number {
    let highest = 0;
    const todos = this.getTodos();
    todos.forEach(function(item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }

  // start my modification code
  private setLocalStorageTodos(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify({ todos: todos }));
  }
  public getTodos(): Todo[] {
    // return this.todos;
    const localStorageItem = JSON.parse(localStorage.getItem('todos'));
    return localStorageItem == null ? [] : localStorageItem.todos;
  }
}
