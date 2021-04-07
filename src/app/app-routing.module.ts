import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import {TodosAddingComponent} from './components/todos-adding/todos-adding.component';
import {TodosComponent} from './components/todos/todos.component';
import {TodosDetailedComponent} from './components/todos-detailed/todos-detailed.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
