import React, { useEffect } from 'react';
import { Container } from './styles';
import { AppActions, useAppDispatch, useAppSelector } from 'store';
import { TableComponent } from 'components/common';

const TodosHeaders = ['ID', 'User ID', 'Title', 'Completed'];
const TodosColumns = ['id', 'userId', 'title', 'completed'];

export const TodosListView: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(({ todos }) => todos.todos);

  useEffect(() => {
    dispatch(AppActions.todos.getTodosListRequest());
  }, []);

  return (
    <Container>
      <TableComponent
        headers={TodosHeaders}
        records={todos}
        columns={TodosColumns}
      />
    </Container>
  );
};
