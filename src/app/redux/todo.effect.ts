import {Component, Injectable} from '@angular/core';;
import {Effect,ofType,Actions} from '@ngrx/effects';
import {Store,select} from '@ngrx/store';
import {of} from 'rxjs';
import {switchMap, map, withLatestFrom, tap} from 'rxjs/operators';

import {IAppState} from './app.state';
import {
  GetTodosSuccess,
  ETodoActions,
  GetTodoSucces,
  GetTodosOnStrSucess,
  GetTodo,
  GetTodos,
  GetTodosOnStr
} from './todo.actions';

import {TaskService} from '../services/task.service'
import {selectTaskList} from './todo.select'


@Injectable()
export class TaskEffects{
  @Effect()
  getTask$ = this._actions$.pipe(
    ofType<GetTodo>(ETodoActions.GetTodo),
    map(action =>action.payload),
    withLatestFrom(this._store.pipe(select(selectTaskList))),
    tap(x => console.log(x)),
    switchMap(([id,tasks])=>{
      const selectedTask = tasks.filter(user=>user.Id===+id)[0];
      return of(new GetTodoSucces(selectedTask));
    })
  )

  @Effect()
  $getTasks = this._actions$.pipe(
    ofType<GetTodos>(ETodoActions.GetTodos),
    switchMap(()=>this._taskService.getTasks())
  )

  constructor(
    private _taskService:TaskService,
    private _actions$: Actions,
    private _store:Store<IAppState>
  ){}
}

