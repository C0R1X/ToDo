import {ETodoActions, TaskActions} from '../actions/todo.actions';
import {initialTodoState, ITodoListState} from '../states/todo.state';


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
    case ETodoActions.AddTodo:{
      return {
        ...state,
        todos:[...state.todos,action.payload]
      }
    }
    case ETodoActions.MakeTodoImportant:{
      return {
        ...state,
        selectedTask:action.payload
      }
    }
    default:
      return state;
  }
};


