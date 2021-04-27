import { Injectable } from '@angular/core';
import { Task } from '../models/taskItem';
import { TodoListState } from './todo.model';
import { Action, Store } from '@ngrx/store'

export enum TodoActionsTypes{
  LoadTodoList = '[TodoList] Load Todo List',
  TodoItemsLoaded = '[TodoList] TodoItemsLoaded',
  TodoItemCreated = '[TodoList] TodoItemCreated',
  TodoItemUpdated = '[TodoList] TodoItemUpdated',
}
export class LoadTodos implements Action{
  readonly type = TodoActionsTypes.LoadTodoList;
  constructor() {
  }
}
export class TodosLoaded implements Action{
  readonly type = TodoActionsTypes.TodoItemsLoaded;
  constructor(public payload: Task[]) {
  }
}
export class TodoItemCreated implements Action{
  readonly type = TodoActionsTypes.TodoItemCreated;
  constructor(public payload:Task[]) {
  }
}
export class TodoItemUpdated implements Action{
  readonly type = TodoActionsTypes.TodoItemUpdated;
  constructor(public payload: Task[]) {
  }
}

@Injectable({providedIn: 'root'})
export class TodoActions{
  constructor(private store: Store<TodoListState>) {
  }

  public LoadTasks():void{
    this.store.dispatch(new LoadTodos());
  }

}
