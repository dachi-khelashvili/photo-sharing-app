import React from 'react';

import { PATH } from 'consts';
import { Routes, Route } from 'react-router-dom';

import {
  LoginPage,
  HomePage,
  RegisterPage,
  DashboardPage,
  GalleryPage,
  ChatRoomPage,
} from 'pages';
``;
export const IsAuthenticatedRoute: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={PATH.HOME} element={<HomePage />} />
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.REGISTER} element={<RegisterPage />} />
        <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
        <Route path={PATH.GALLERY} element={<GalleryPage />} />
        <Route path={PATH.CHATROOM} element={<ChatRoomPage />} />
      </Routes>
    </>
  );
};
