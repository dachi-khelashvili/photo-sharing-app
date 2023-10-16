/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from 'types';
import { Todos } from '../types';

type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    getTodosListRequest(
      _state: TodoState,
      _action: PayloadAction<Todos.GetTodosListRequestPayload>
    ) {
      // Get todos list request
    },
    getTodosListSuccess(
      state: TodoState,
      action: PayloadAction<Todos.GetTodosListSuccessPayload>
    ) {
      state.todos = action.payload.todos;
    },
    getTodosListFailure() {
      // Get todos list failure
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice;
