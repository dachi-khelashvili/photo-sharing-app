import { PATH } from 'consts';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Header,
  LoginPage,
  HomePage,
  RegisterPage,
  GalleryPage,
  ChatRoomPage,
} from 'pages';

export const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={PATH.HOME} element={<HomePage />} />
          <Route path={PATH.LOGIN} element={<LoginPage />} />
          <Route path={PATH.REGISTER} element={<RegisterPage />} />
          <Route path={PATH.DASHBOARD} element={<GalleryPage />} />
          <Route path={PATH.CHATROOM} element={<ChatRoomPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
