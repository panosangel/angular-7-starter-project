import {TodoState} from '../state.model';
import * as todoActions from './todo.actions';

const initialState: TodoState = {
  list: [],
  currentElement: null,
};

export function todoReducer(state = initialState, action: todoActions.TodoActions) {
  switch (action.type) {
    case todoActions.GET_LIST_RESPONSE: {
      return {
        ...state,
        list: action.todos
      };
    }

    case todoActions.GET_TODO_RESPONSE: {
      return {
        ...state,
        currentElement: action.todo
      };
    }

    case todoActions.DELETE_TODO_RESPONSE: {
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.todoId)
      };
    }

    case todoActions.CLEAR_CURRENT_TODO: {
      return {
        ...state,
        currentElement: null
      };
    }
  }
  return state;
}
