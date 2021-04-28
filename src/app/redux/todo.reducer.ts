import {ETodoActions, TaskActions} from './todo.actions';
import {initialTodoState, ITodoListState} from './todo.state';
import {ajax} from 'rxjs/ajax';


export const taskReducer = (
    state = initialTodoState,
      action:TaskActions
):ITodoListState => {
  switch (action.type){
    case ETodoActions.GetTodosSucces:{
      return {
        ...state,
        todos:action.payload
      };
    }
    case ETodoActions.GetTodoSucess:{
      return {
        ...state,
        selectedTask:action.payload
      }
    }
    default:
      return state;
  }
};


