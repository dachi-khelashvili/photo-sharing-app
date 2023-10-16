import { TodosListView } from 'components';
import React from 'react';
import { WithLayout } from 'components';

const TodosList: React.FC = () => {
  return <TodosListView />;
};

export const TodosListPage = WithLayout(TodosList);
