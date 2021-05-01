import {createSelector, select} from '@ngrx/store';
import {IAppState} from '../states/app.state';
import {ITodoListState} from '../states/todo.state';
import {pipe} from 'rxjs';

const selectTasks = (state: IAppState) => state.todos;

export const getTasks = createSelector(selectTasks, (state: ITodoListState) => state.todos);
export const selectSelectedTodo = createSelector(selectTasks, (state: ITodoListState) => state.selectedTask);
