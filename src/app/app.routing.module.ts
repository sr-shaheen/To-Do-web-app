import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'edit', component: EditTodoComponent },
  { path: 'detail', component: DetailTodoComponent },
  { path: 'add', component: AddTodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
