import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from 'components/logo';
import { Container, Menu, Group } from './styles';
import { Avatar, TextButton } from 'components';
import { PATH, SIZESTYLE } from 'consts';
import { useOutsideAlerter } from 'hooks';

interface HeaderProps {
  isAuthenticated: boolean;
  setAuthentication: (e: boolean) => void;
}

type NavigationItem = {
  path: string;
  label: string;
};

const UserMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(menuRef, () => onClose());

  const menuItems: NavigationItem[] = [
    { path: PATH.PROFILE, label: 'My Profile' },
    { path: PATH.PHOTOS, label: 'My Photos' },
    { path: PATH.FRIENDS, label: 'My Friends' },
    { path: PATH.LOGIN, label: 'Log Out' },
  ];

  return (
    <Menu ref={menuRef} role="menu" aria-label="User menu">
      {menuItems.map(({ path, label }) => (
        <TextButton
          key={path}
          onClick={() => {
            navigate(path);
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
            onClose();
          }}
        >
          {label}
        </TextButton>
      ))}
    </Menu>
  );
};

export const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const authButtons: NavigationItem[] = [
    { path: PATH.LOGIN, label: 'Log In' },
    { path: PATH.REGISTER, label: 'Register' },
  ];

  const navButtons: NavigationItem[] = [
    { path: PATH.COMMUNITY, label: 'Community' },
    { path: PATH.CHATROOM, label: 'Chatting' },
  ];

  const goTo = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Container role="banner">
        <Logo style={SIZESTYLE.SMALL} />
        <Group role="navigation">
          {!isAuthenticated ? (
            <>
              {authButtons.map(({ path, label }) => (
                <TextButton key={path} onClick={() => goTo(path)}>
                  {label}
                </TextButton>
              ))}
            </>
          ) : (
            <>
              {navButtons.map(({ path, label }) => (
                <TextButton key={path} onClick={() => goTo(path)}>
                  {label}
                </TextButton>
              ))}
              <Avatar
                src="https://fastly.picsum.photos/id/507/600/600.jpg?hmac=rOqut4F9CmwnmdZhtV_76pQXBEG5Y1wibCCKzxb5luk"
                onClick={() => setIsMenuOpen(true)}
              />
              <TextButton onClick={() => setIsMenuOpen(true)}>User</TextButton>
            </>
          )}
        </Group>
      </Container>
      {isMenuOpen && <UserMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};
