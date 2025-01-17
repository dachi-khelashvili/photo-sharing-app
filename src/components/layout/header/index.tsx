import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from 'components/logo';

import { Container, ShortMenu, LinkGroup } from './styles';

import { StyledLink, StyledButton, StyledAvatar } from 'components';
import { COLORSTYLE, PATH } from 'consts';
import { useOutsideAlerter } from 'hooks';
interface HeaderComponentProps {
  isAuthenticated: boolean;
  setAuthentication: (e: boolean) => void;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = (props) => {
  const [isMenuShowed, showMenu] = useState(false);

  const navigate = useNavigate();

  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, showMenu);

  const onClickMyProfileAlerter = () => {
    navigate(PATH.PROFILE);
    showMenu(false);
  };
  const onClickMyPhotosAlerter = () => {
    navigate(PATH.PHOTOS);
    showMenu(false);
  };
  const onClickMyFriendsAlerter = () => {
    navigate(PATH.FRIENDS);
    showMenu(false);
  };
  const onClickLogOutAlerter = () => {
    navigate(PATH.HOME);
    showMenu(false);
    props.setAuthentication(false);
  };
  return (
    <>
      <Container>
        <Logo style={COLORSTYLE.DARK} />
        <LinkGroup>
          {!props.isAuthenticated ? (
            <>
              <StyledLink linkstyle="normal" to={PATH.LOGIN}>
                sign in
              </StyledLink>
              <StyledLink linkstyle="normal" to={PATH.REGISTER}>
                sign up
              </StyledLink>
            </>
          ) : (
            <>
              <StyledLink linkstyle="normal" to={PATH.COMMUNITY}>
                community
              </StyledLink>
              <StyledLink linkstyle="normal" to={PATH.CHATROOM}>
                chatting
              </StyledLink>
              <StyledAvatar
                avatarstyle="small"
                onClick={() => {
                  showMenu(true);
                }}
                src="./snoopy-3.jpg"
              />
              <StyledButton
                buttonstyle="transparent"
                onClick={() => {
                  showMenu(true);
                }}
              >
                Steven
              </StyledButton>
            </>
          )}
        </LinkGroup>
      </Container>
      {isMenuShowed && (
        <>
          <ShortMenu ref={menuRef}>
            <StyledButton
              buttonstyle="transparent"
              onClick={onClickMyProfileAlerter}
            >
              my profile
            </StyledButton>
            <StyledButton
              buttonstyle="transparent"
              onClick={onClickMyPhotosAlerter}
            >
              my photos
            </StyledButton>
            <StyledButton
              buttonstyle="transparent"
              onClick={onClickMyFriendsAlerter}
            >
              my friends
            </StyledButton>
            <StyledButton
              buttonstyle="transparent"
              onClick={onClickLogOutAlerter}
            >
              log out
            </StyledButton>
          </ShortMenu>
        </>
      )}
    </>
  );
};
