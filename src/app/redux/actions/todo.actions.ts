import {Task} from '../../models/taskItem';
import {Action} from '@ngrx/store';

export enum ETodoActions {
  GetTodos = '[TodoList] Get Todos',
  GetTodosSucces = '[TodoList] Get Todos Success',
  GetTodosOnStr = '[TodoList] Get Todos by String',
  GetTodosOnStrSucces = '[TodoList] Get Todos by String Success',
  GetTodo = '[TodoList] Get Todo',
  GetTodoSucess = '[TodoList] Get Todo Success',
  AddTodo = '[TodoList] Add Todo',
  DeleteTodo = '[TodoList] Delete Todo',
  MakeTodoImportant = '[TodoList] Make Important'
}

export class GetTodos implements Action {
  public readonly type = ETodoActions.GetTodos;
}

export class GetTodosSuccess implements Action {
  public readonly type = ETodoActions.GetTodosSucces;

  constructor(public payload: Task[]) {
  }
}

export class GetTodosOnStr implements Action {
  readonly type = ETodoActions.GetTodosOnStr;

  constructor(public payload: string) {
  }
}

export class GetTodosOnStrSucess implements Action {
  readonly type = ETodoActions.GetTodosOnStrSucces;

  constructor(public payload: Task[]) {
  }
}

export class GetTodo implements Action {
  readonly type = ETodoActions.GetTodo;

  constructor(public payload: string) {
  }
}

export class GetTodoSucces implements Action {
  readonly type = ETodoActions.GetTodoSucess;

  constructor(public payload: Task) {
  }
}


export class AddTodo implements Action {
  readonly type = ETodoActions.AddTodo;

  constructor(public payload: Task) {
  }
}

export class MakeTodoImportant implements Action {
  readonly type = ETodoActions.MakeTodoImportant;

  constructor(public payload: Task) {
  }
}

export class DeleteTodo implements Action {
  readonly type = ETodoActions.DeleteTodo;

  constructor(public payload: Task) {
  }
}

export type TaskActions =
  GetTodos
  | GetTodosSuccess
  | GetTodosOnStr
  | GetTodosOnStrSucess
  | GetTodo
  | GetTodoSucces
  | AddTodo
  | MakeTodoImportant
  | DeleteTodo;
