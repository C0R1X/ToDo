import { GenericAction } from '';
import { Task } from '../models/taskItem';
import { TodoActionsTypes } from './todo.actions';
import { TodoListState } from './todo.model';

export class TodoListInitState implements TodoListState {
  todos: Task[];
  errors?: Error;
  isLoading: boolean;
  constructor() {
    this.todos = [];
    this.isLoading = false;
  }

  const addTask = (
    lastState:TodoListState,
    action: GenericAction<TodoActionsTypes,void>
  ):TodoListState=>{
    return {
      ...lastState,
      isLoading:true
    };
  };

}
