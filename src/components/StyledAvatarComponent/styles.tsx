import styled from 'styled-components';

export type StyledAvatarType = 'large' | 'normal' | 'small';

export const StyledAvatar = styled.button<{
  avatarStyle: StyledAvatarType;
  src: string;
}>`
  cursor: pointer;
  border-radius: 50%;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: 50%;
  object-fit: contain;
  margin: 10px;
  ${({ avatarStyle }) =>
    avatarStyle === 'large' &&
    `
      width: 200px;
      height: 200px;
      background-size: auto 200px;
    `};
  ${({ avatarStyle }) =>
    avatarStyle === 'normal' &&
    `
        width: 70px;
        height: 70px;
  background-size: auto 70px;
    `};
  ${({ avatarStyle }) =>
    avatarStyle === 'small' &&
    `
        width: 40px;
        height: 40px;
  background-size: auto 40px;
    `};
`;
