import todosSlice, { todosActions } from './todos.slice';

export const Slices = { todos: todosSlice.reducer };

export const Actions = {
  todos: todosActions,
};
