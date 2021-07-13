import {ActionReducerMap} from '@ngrx/store';

import {routerReducer} from '@ngrx/router-store';
import {IAppState} from '../states/app.state';
import {taskReducer} from '../reducers/todo.reducer'

export const appReducer:ActionReducerMap<IAppState,any>={
  router:routerReducer,
  todos:taskReducer
}
