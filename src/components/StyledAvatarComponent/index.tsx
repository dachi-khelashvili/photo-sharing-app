import React from 'react';
import { StyledAvatar, StyledAvatarType } from './styles';

interface StyledAvatarComponentProps {
  src: string;
  avatarStyle: StyledAvatarType;
  onClick: () => void;
}

export const StyledAvatarComponent: React.FC<StyledAvatarComponentProps> = ({
  src,
  avatarStyle,
  onClick,
}) => {
  return <StyledAvatar avatarStyle={avatarStyle} onClick={onClick} src={src} />;
};
