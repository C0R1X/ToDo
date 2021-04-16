import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodosAddingComponent } from './components/todos-adding/todos-adding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodosDetailedComponent } from './components/todos-detailed/todos-detailed.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosAddingComponent,
    TodosDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
