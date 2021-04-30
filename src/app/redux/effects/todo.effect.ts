import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {of} from 'rxjs';
import {map, switchMap, tap, withLatestFrom} from 'rxjs/operators';

import {IAppState} from '../states/app.state';
import {ETodoActions, GetTodo, GetTodos, GetTodoSucces} from '../actions/todo.actions';

import {TaskService} from '../../services/task.service';
import {getTasks} from '../selectors/todo.select';
import {TASKS} from '../../mock-tasks';


@Injectable()
export class TaskEffects {
  //
  // @Effect()
  // getTask$ = this.actions$.pipe(
  //   ofType<GetTodo>(ETodoActions.GetTodo),
  //   map(action => action.payload),
  //   withLatestFrom(this.store.pipe(select(getTasks))),
  //   tap(x => console.log(x)),
  //   map(([id, tasks]) => {
  //     const selectedTask = tasks.filter(user => user.Id === +id)[0];
  //     return new GetTodoSucces(selectedTask);
  //   })
  // );

  @Effect()
  getTasks$ = this.actions$.pipe(
    ofType<GetTodos>(ETodoActions.GetTodos),
    switchMap(() => of(TASKS))
  );


  constructor(
    private taskService: TaskService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {
  }
}

