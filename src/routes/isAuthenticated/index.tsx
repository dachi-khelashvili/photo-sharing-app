import React from 'react';

import { PATH } from 'consts';
import { Routes, Route } from 'react-router-dom';

import {
  AuthenticatedHeader,
  LoginPage,
  HomePage,
  RegisterPage,
  DashboardPage,
  GalleryPage,
  ChatRoomPage,
  PhotosPage,
} from 'pages';
``;
export const IsAuthenticatedRoute: React.FC = () => {
  return (
    <>
      <AuthenticatedHeader />
      <Routes>
        <Route path={PATH.HOME} element={<HomePage />} />
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.REGISTER} element={<RegisterPage />} />
        <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
        <Route path={PATH.GALLERY} element={<GalleryPage />} />
        <Route path={PATH.CHATROOM} element={<ChatRoomPage />} />
        <Route path={PATH.PHOTOS} element={<PhotosPage />} />
      </Routes>
    </>
  );
};
