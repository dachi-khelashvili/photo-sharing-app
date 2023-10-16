import { PATH } from 'consts';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFoundPage, DashboardPage, TodosListPage } from 'pages';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
        <Route path={PATH.TODOS_LIST} element={<TodosListPage />} />
        <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
