import React, { useState, useEffect, useRef } from 'react';

import { Appbar, Logo, GoToLink, ShortMenu } from './styles';
import { SearchBar, StyledButtonComponent } from 'components';
import { PATH } from 'consts';
import { SimpleModal, Screen } from 'components/Modal';
import { PasswordInput } from 'components/PasswordInput';

export const HeaderView: React.FC = () => {
  const isAuthenticated = false;
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

  const [oldPassword, setOld] = useState('');
  const [newPassword, setNew] = useState('');

  const changePassword = () => {
    console.log('changed password' + oldPassword + newPassword);
  };

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
            <div className="grid">
              <h2>Change Password</h2>
              <div className="flex">
                <div className="grid">
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
                </div>
                <StyledButtonComponent
                  buttonStyle="blue"
                  onClick={changePassword}
                >
                  OK
                </StyledButtonComponent>
              </div>
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
                    <img src="/logo.jpg" alt="avatar" className="profile-pic" />
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
