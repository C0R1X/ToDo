import {RouterReducerState} from '@ngrx/router-store';

import {initialTodoState, ITodoListState} from './todo.state';

export interface IAppState {
  router?: RouterReducerState;
  todos: ITodoListState;
}

export const initialAppState: IAppState = {
  todos: initialTodoState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
