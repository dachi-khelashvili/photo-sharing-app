import React, { useRef } from 'react';
import { Screen, Image, Group, Box } from './styles';
import { useOutsideAlerter, useEscapeKey } from 'hooks';
import {
  Avatar,
  RoundButton,
  HGroup,
  BigFrame,
  Normal,
  Pair,
  SmallBold,
  Heading,
  Divider,
  Bold,
  Small,
  Spacer,
} from 'components';
import { SIZESTYLE, COLORSTYLE } from 'consts';

type PhotoType = {
  path: string;
  uploader: string;
  title: string;
  status: string;
  description: string;
  tags: string;
};

type ProfileInfoType = {
  path: string;
  name: string;
  birthday: string;
  gender: string;
  address: string;
};

type PhotoInfoType = {
  photo: PhotoType;
  like: number;
};

type ModalProps = {
  photoInfo: PhotoInfoType;
  profileInfo: ProfileInfoType;
  handleCancel: () => void;
};

export const PhotoModal: React.FC<ModalProps> = ({
  photoInfo,
  profileInfo,
  handleCancel,
}) => {
  const ref = useRef(null);
  useOutsideAlerter(ref, handleCancel);
  useEscapeKey(handleCancel);

  const handleFriendRequest = () => {
    handleCancel();
  };
  return (
    <Screen>
      <BigFrame ref={ref}>
        <Heading>{photoInfo.photo.title}</Heading>
        <Image src={photoInfo.photo.path} />
        <Box>
          <HGroup>
            <Avatar src={profileInfo.path} style={SIZESTYLE.BIG} />
            <HGroup>
              <Pair>
                <Bold>{profileInfo.name}</Bold>
                <Small>{profileInfo.name}</Small>
              </Pair>
              <Pair>
                <Normal>{profileInfo.gender}</Normal>
              </Pair>
              <Spacer />
            </HGroup>
          </HGroup>
          <Divider />
          <Group>
            <Pair>
              <SmallBold>Uploader</SmallBold>
              <Normal>{photoInfo.photo.uploader}</Normal>
            </Pair>
            <Pair>
              <SmallBold>Status</SmallBold>
              <Normal>{photoInfo.photo.status}</Normal>
            </Pair>
            <Pair>
              <SmallBold>Tags</SmallBold>
              <Normal>{photoInfo.photo.tags}</Normal>
            </Pair>
            <Pair>
              <SmallBold>Like</SmallBold>
              <Normal>{photoInfo.like}</Normal>
            </Pair>
            <Pair>
              <SmallBold>Description</SmallBold>
              <Normal>{photoInfo.photo.description}</Normal>
            </Pair>
          </Group>
        </Box>
        <HGroup>
          <RoundButton
            style={COLORSTYLE.DARK_MAGENTA}
            onClick={handleFriendRequest}
          >
            Friend Request
          </RoundButton>
          <RoundButton style={COLORSTYLE.DOGWOOD_ROSE} onClick={handleCancel}>
            Cancel
          </RoundButton>
        </HGroup>
      </BigFrame>
    </Screen>
  );
};
