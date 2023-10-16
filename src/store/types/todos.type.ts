import { Todo } from 'types';

/* eslint-disable @typescript-eslint/ban-types */
export type GetTodosListRequestPayload = undefined;

export type GetTodosListSuccessPayload = {
  todos: Todo[];
};

export type GetTodosListFailurePayload = undefined;
