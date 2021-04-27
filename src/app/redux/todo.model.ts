import { Task } from '../models/taskItem';

export interface TodoListState {
  todos: Task[];
  errors?: Error;
  isLoading: boolean;
}
