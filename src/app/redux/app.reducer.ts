import {ActionReducerMap} from '@ngrx/store';

import {routerReducer} from '@ngrx/router-store';
import {IAppState} from './app.state';
import {taskReducer} from './todo.reducer'

export const appReducer:ActionReducerMap<IAppState,any>={
  router:routerReducer,
  todos:taskReducer
}
