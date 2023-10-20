import React, { useState, useEffect, useRef } from 'react';

import {
  Appbar,
  Logo,
  GoToLink,
  ShortMenu,
  Avatars,
  Grid,
  Flex,
  WidthGrid,
  RightGrid,
  Description,
  FlexAvatar,
  ImageCropper,
  ProfilePic,
} from './styles';
import {
  SearchBar,
  StyledButtonComponent,
  StyledAvatarComponent,
  SimpleModal,
  Screen,
  PasswordInput,
} from 'components';
import { PATH } from 'consts';

const AvatarsList = [
  './snoopy-1.jpg',
  './snoopy-2.jpg',
  './snoopy-3.jpg',
  './snoopy-4.jpg',
  './snoopy-5.jpg',
  './snoopy-6.jpg',
];

export const AuthenticatedHeaderView: React.FC = () => {
  const useOutsideMenuAlerter = (ref: React.RefObject<HTMLElement>) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          // alert('You clicked outside of me!');
          setShow(false);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const useOutsideAccountAlerter = (ref: React.RefObject<HTMLElement>) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          // alert('You clicked outside of me!');
          setAccount(false);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const [showMenu, setShow] = useState(false);
  const [showAccount, setAccount] = useState(false);

  const menuRef = useRef(null);
  useOutsideMenuAlerter(menuRef);

  const accountRef = useRef(null);
  useOutsideAccountAlerter(accountRef);

  const onClick = () => {
    setShow(true);
  };
  const onAccount = () => {
    setAccount(true);
    console.log('Account');
  };
  const onLogout = () => {
    console.log('Logout');
  };

  const changePassword = () => {
    console.log('changed password');
  };

  const changeAvatar = () => {
    console.log('changed avatar');
  };

  const [oldPassword, setOld] = useState('');
  const [newPassword, setNew] = useState('');

  return (
    <>
      {showMenu && (
        <ShortMenu ref={menuRef}>
          <StyledButtonComponent buttonStyle="black" onClick={onAccount}>
            My Account
          </StyledButtonComponent>
          <StyledButtonComponent
            buttonStyle="black"
            onClick={onLogout}
            key="Logout"
          >
            Logout
          </StyledButtonComponent>
        </ShortMenu>
      )}
      {showAccount && (
        <Screen>
          <SimpleModal ref={accountRef}>
            <Grid>
              <h2>Change Password</h2>
              <Flex>
                <WidthGrid>
                  <PasswordInput
                    isValidatable={true}
                    label="old password"
                    onChange={setOld}
                  />
                  <PasswordInput
                    isValidatable={true}
                    label="new password"
                    onChange={setNew}
                  />
                  <RightGrid>
                    <StyledButtonComponent
                      buttonStyle="blue"
                      onClick={changePassword}
                    >
                      OK
                    </StyledButtonComponent>
                  </RightGrid>
                </WidthGrid>
                <FlexAvatar>
                  <StyledAvatarComponent
                    avatarStyle="large"
                    onClick={changeAvatar}
                    src="./avatar.jpg"
                  />
                </FlexAvatar>
              </Flex>
              <h2>About me</h2>
              <Description>
                <a>I'm senior photographer who shared 1000+ photos.</a>
              </Description>
              <h2>Friends</h2>
              <Avatars>
                {AvatarsList.map((value) => (
                  <StyledAvatarComponent
                    src={value}
                    avatarStyle="normal"
                    onClick={changeAvatar}
                  />
                ))}
              </Avatars>
            </Grid>
          </SimpleModal>
        </Screen>
      )}
      <Appbar>
        <Logo src="./grey-logo.png" />
        <h1>Photo Share</h1>
        <RightGrid>
          <StyledButtonComponent buttonStyle="black" onClick={onClick}>
            <Flex>
              <ImageCropper>
                <ProfilePic
                  src="/avatar.jpg"
                  alt="avatar"
                  className="profile-pic"
                />
              </ImageCropper>
              User Name
            </Flex>
          </StyledButtonComponent>
        </RightGrid>
      </Appbar>
    </>
  );
};

export const HeaderView: React.FC = () => {
  return (
    <Appbar>
      <Logo src="./grey-logo.png" />
      <SearchBar type="text" placeholder="Search image..." />
      <GoToLink to={PATH.LOGIN}>Log in</GoToLink>
    </Appbar>
  );
};
