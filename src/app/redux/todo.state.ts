import { Task } from '../models/taskItem';

export interface ITodoListState {
  todos: Task[];
  selectedTask: Task;
}

export const initialTodoState = {
  todos:null,
  selectedTask:null
}
