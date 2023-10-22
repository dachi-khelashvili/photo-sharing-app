import React, { useState, useRef } from 'react';
import {
  Container,
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
  LogoIcon,
  LogoTitle,
  LinkGroup,
} from './styles';

import {
  StyledButtonComponent,
  StyledAvatarComponent,
  PasswordInput,
} from 'components';
import { SimpleModal, Screen } from 'components/Modal/styles';
import { PATH } from 'consts';
import { useOutsideAlerter } from 'hooks';

const AvatarsList = [
  './snoopy-1.jpg',
  './snoopy-2.jpg',
  './snoopy-3.jpg',
  './snoopy-4.jpg',
  './snoopy-5.jpg',
  './snoopy-6.jpg',
];

export const AuthenticatedHeaderView: React.FC = () => {
  const [showMenu, setShow] = useState<boolean>(false);
  const [showAccount, setAccount] = useState<boolean>(false);

  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, setShow);

  const accountRef = useRef(null);
  useOutsideAlerter(accountRef, setAccount);

  const onClick = () => {
    setShow(true);
    console.log(oldPassword + newPassword);
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
                    value={oldPassword}
                    isValidatable={true}
                    label="old password"
                    onChange={setOldPassword}
                  />
                  <PasswordInput
                    value={newPassword}
                    isValidatable={true}
                    label="new password"
                    onChange={setNewPassword}
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
      <Container>
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
      </Container>
    </>
  );
};

export const HeaderComponent: React.FC = () => {
  return (
    <Container>
      <Logo to={PATH.HOME}>
        <LogoIcon src="./logo.svg" />
        <LogoTitle>PHOTOSHARE</LogoTitle>
      </Logo>
      <LinkGroup>
        <GoToLink to={PATH.LOGIN}>Sign In</GoToLink>
        <GoToLink to={PATH.REGISTER}>Sign Up</GoToLink>
      </LinkGroup>
    </Container>
  );
};
