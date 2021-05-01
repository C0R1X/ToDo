import { Task } from '../../models/taskItem';
import {of} from 'rxjs';
import {TASKS} from '../../mock-tasks';

export interface ITodoListState {
  todos: Task[];
  selectedTask: Task;
}

export const initialTodoState = {
  todos : [] as Task[],
  selectedTask:{} as Task
}
