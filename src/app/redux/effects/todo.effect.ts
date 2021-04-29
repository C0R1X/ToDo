import {Component, Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {Store, select} from '@ngrx/store';
import {of} from 'rxjs';
import {switchMap, map, withLatestFrom, tap, mergeMap} from 'rxjs/operators';

import {IAppState} from '../states/app.state';
import {
  GetTodosSuccess,
  ETodoActions,
  GetTodoSucces,
  GetTodosOnStrSucess,
  GetTodo,
  GetTodos,
  GetTodosOnStr, AddTodo
} from '../actions/todo.actions';

import {TaskService} from '../../services/task.service';
import {getTasks} from '../selectors/todo.select';
import {TASKS} from '../../mock-tasks';
import {Task} from '../../models/taskItem';


@Injectable()
export class TaskEffects {

  @Effect()
  getTask$ = this.actions$.pipe(
    ofType<GetTodo>(ETodoActions.GetTodo),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(getTasks))),
    tap(x => console.log(x)),
    map(([id, tasks]) => {
      const selectedTask = tasks.filter(user => user.Id === +id)[0];
      return new GetTodoSucces(selectedTask);
    })
  );

  @Effect()
  getTasks$ = this.actions$.pipe(
    ofType<GetTodos>(ETodoActions.GetTodos),
    switchMap(() => of(TASKS))
  );

  @Effect()
  addBook$ = this.actions$.pipe(
    ofType<AddTodo>(ETodoActions.AddTodo),
    map(action=>action.payload),
    map(newTask=>{
      return new AddTodo(newTask)
    })



  )




  constructor(
    private taskService: TaskService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {
  }
}

