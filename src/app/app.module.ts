import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoComponent,
    DashboardComponent,
    EditTodoComponent,
    DetailTodoComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
