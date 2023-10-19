import React, { useState, useEffect, useRef } from 'react';

import { Appbar, Logo, GoToLink, ShortMenu, Avatars } from './styles';
import {
  SearchBar,
  StyledButtonComponent,
  StyledAvatarComponent,
} from 'components';
import { PATH } from 'consts';
import { SimpleModal, Screen } from 'components/Modal';
import { PasswordInput } from 'components/PasswordInput';

export const HeaderView: React.FC = () => {
  const isAuthenticated = false;
  const AvatarsList = [
    './snoopy-1.jpg',
    './snoopy-2.jpg',
    './snoopy-3.jpg',
    './snoopy-4.jpg',
    './snoopy-5.jpg',
    './snoopy-6.jpg',
  ];

  const [showMenu, setShow] = useState(false);
  const onClick = () => {
    setShow(true);
  };

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

  const [showAccount, setAccount] = useState(false);
  const onAccount = () => {
    setAccount(true);
    console.log('Account');
  };

  const onLogout = () => {
    console.log('Logout');
  };

  const menuRef = useRef(null);
  useOutsideMenuAlerter(menuRef);
  const accountRef = useRef(null);
  useOutsideAccountAlerter(accountRef);
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
          <StyledButtonComponent buttonStyle="black" onClick={onLogout}>
            Logout
          </StyledButtonComponent>
        </ShortMenu>
      )}
      {showAccount && (
        <Screen>
          <SimpleModal ref={accountRef}>
            <div className="grid margin-20">
              <h2>Change Password</h2>
              <div className="flex space-between">
                <div className="grid col-8">
                  <PasswordInput
                    validate={true}
                    label="old password"
                    onChange={(e) => setOld(e)}
                  />
                  <PasswordInput
                    validate={true}
                    label="new password"
                    onChange={(e) => setNew(e)}
                  />
                  <div style={{ marginLeft: 'auto' }}>
                    <StyledButtonComponent
                      buttonStyle="blue"
                      onClick={changePassword}
                    >
                      OK
                    </StyledButtonComponent>
                  </div>
                </div>
                <div className="flex col-3 justify-center">
                  <StyledAvatarComponent
                    avatarStyle="large"
                    onClick={changeAvatar}
                    src="./avatar.jpg"
                  />
                </div>
              </div>
              <h2>About me</h2>
              <div className="margin-left-10">
                <a>I'm senior photographer who shared 1000+ photos.</a>
              </div>
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
            </div>
          </SimpleModal>
        </Screen>
      )}
      <Appbar>
        {isAuthenticated ? (
          <>
            <Logo src="./grey-logo.png" />
            <SearchBar type="text" placeholder="Search image..." />
            <GoToLink to={PATH.LOGIN}>Log in</GoToLink>
          </>
        ) : (
          <>
            <Logo src="./grey-logo.png" />
            <h1 style={{ fontFamily: 'fantasy' }}>Photo Share</h1>
            <div style={{ marginLeft: 'auto' }}>
              <StyledButtonComponent buttonStyle="black" onClick={onClick}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="image-cropper">
                    <img
                      src="/avatar.jpg"
                      alt="avatar"
                      className="profile-pic"
                    />
                  </div>
                  User Name
                </div>
              </StyledButtonComponent>
            </div>
          </>
        )}
      </Appbar>
    </>
  );
};
