import { RoundButton } from 'components/buttons';
import { COLORSTYLE, THEME } from 'consts';
import React from 'react';
import styled from 'styled-components';

export const Screen = styled.div`
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: ${THEME.Z_INDEX.MODAL};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SimpleModal = styled.div`
  margin: auto;
  margin-top: 200px;
  width: 40%;
  height: fit-content;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  margin: 80px auto;
  height: fit-content;
  width: 60%;
  border-radius: 20px;
  background-color: white;
  display: grid;
  padding: 10px;
  gap: 20px;
`;

export const Header = styled.h3`
  margin: 20px auto;
`;

export const Content = styled.div`
  display: flex;
  width: 80%;
  margin: 0px auto;
  gap: 100px;
`;

export const ImageContainer = styled.img`
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: none;
  width: 250px;
  height: 250px;
`;

export const ProfileImageContainer = styled.img`
  border-radius: 50%;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: none;
  width: 250px;
  height: 250px;
`;
// Image Property

const GridContainer = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 120px auto;
  gap: 10px;
  padding: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const TextBox = styled.input`
  width: 100%;
  height: 50px;
  &:disabled {
    color: black;
  }
`;

type PhotoType = {
  title: string;
  status: string;
  description: string;
  tags: string;
};

type ImagePropertyProps = {
  allow: boolean;
  photo: PhotoType;
};

export const ImageProperty: React.FC<ImagePropertyProps> = ({
  allow,
  photo,
}) => {
  return (
    <GridContainer>
      <Label>Title:</Label>
      <TextBox disabled={!allow} type="text" value={photo.title} />
      <Label>Status:</Label>
      <TextBox disabled={!allow} type="text" value={photo.status} />
      <Label>Description:</Label>
      <TextBox disabled={!allow} type="text" value={photo.description} />
      <Label>Tags:</Label>
      <TextBox disabled={!allow} type="text" value={photo.tags} />
    </GridContainer>
  );
};

const ButtonLayout = styled.div`
  margin-left: auto;
  margin-right: 50px;
  display: flex;
  gap: 20px;
`;

type FooterProps = {
  handleCancel: () => void;
  handleFriendRequest: () => void;
};

export const Footer: React.FC<FooterProps> = ({
  handleCancel,
  handleFriendRequest,
}) => {
  return (
    <ButtonLayout>
      <RoundButton
        style={COLORSTYLE.DARK_MAGENTA}
        onClick={handleFriendRequest}
      >
        Friend Request
      </RoundButton>
      <RoundButton style={COLORSTYLE.DOGWOOD_ROSE} onClick={handleCancel}>
        Cancel
      </RoundButton>
    </ButtonLayout>
  );
};

type ProfileType = {
  username: string;
  birthday: string;
  gender: string;
  location: string;
};

type ProfilePropertyProps = {
  allow: boolean;
  profile: ProfileType;
};

export const ProfileProperty: React.FC<ProfilePropertyProps> = ({
  allow,
  profile: profile,
}) => {
  return (
    <GridContainer>
      <Label>Username:</Label>
      <TextBox disabled={!allow} type="text" value={profile.username} />
      <Label>Birthday:</Label>
      <TextBox disabled={!allow} type="text" value={profile.birthday} />
      <Label>Gender:</Label>
      <TextBox disabled={!allow} type="text" value={profile.gender} />
      <Label>Location:</Label>
      <TextBox disabled={!allow} type="text" value={profile.location} />
    </GridContainer>
  );
};
