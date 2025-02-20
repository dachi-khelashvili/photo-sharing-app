import { PATH } from 'consts';
import { Routes, Route } from 'react-router-dom';
import { useUserData } from 'contexts/user';

import {
  LoginPage,
  HomePage,
  RegisterPage,
  ChatRoomPage,
  ProfilePage,
  PhotosPage,
  FriendsPage,
  CommunityPage,
} from 'pages';
``;

export const RouteComponent = () => {
  const { isAuthenticated } = useUserData();
  return (
    <>
      {isAuthenticated ? (
        <Routes>
          <Route path={PATH.HOME} element={<HomePage />} />
          <Route path={PATH.LOGIN} element={<LoginPage />} />
          <Route path={PATH.REGISTER} element={<RegisterPage />} />
          <Route path={PATH.COMMUNITY} element={<CommunityPage />} />
          <Route path={PATH.CHATROOM} element={<ChatRoomPage />} />
          <Route path={PATH.PROFILE} element={<ProfilePage />} />
          <Route path={PATH.PHOTOS} element={<PhotosPage />} />
          <Route path={PATH.FRIENDS} element={<FriendsPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={PATH.HOME} element={<HomePage />} />
          <Route path={PATH.LOGIN} element={<LoginPage />} />
          <Route path={PATH.REGISTER} element={<RegisterPage />} />
        </Routes>
      )}
    </>
  );
};
