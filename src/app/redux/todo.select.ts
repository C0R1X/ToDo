import {createSelector} from '@ngrx/store';
import {IAppState} from './app.state';
import {ITodoListState} from './todo.state';

const selectTasks= (state:IAppState)=>state.todos;

export const selectTaskList = createSelector(
  selectTasks,
  (state:ITodoListState)=> state.todos
);

export const selectSelectedTodo = createSelector(
  selectTasks,
  (state:ITodoListState)=>state.selectedTask
);
