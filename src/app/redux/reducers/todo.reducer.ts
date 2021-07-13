import {ETodoActions, TaskActions} from '../actions/todo.actions';
import {initialTodoState, ITodoListState} from '../states/todo.state';


export const taskReducer = (
  state = initialTodoState,
  action: TaskActions
): ITodoListState => {
  switch (action.type) {
    case ETodoActions.GetTodosSucces: {
      return {
        ...state,
        todos: action.payload
      };
    }
    case ETodoActions.GetTodoSucess: {
      return {
        ...state,
        selectedTask: action.payload
      };
    }
    case ETodoActions.AddTodo: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }
    case ETodoActions.MakeTodoImportant: {
      const tsk = state.todos.find(x => x.Id == action.payload.Id);
      tsk.Important = true;
      return {
        ...state,
        todos: state.todos
      };
    }
    case ETodoActions.DeleteTodo: {
      return {
        ...state,
        todos: state.todos.filter((tsk) => tsk != action.payload)
      };
    }
    default:
      return state;
  }
};


