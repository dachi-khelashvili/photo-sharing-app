import styled from 'styled-components';

export type StyledAvatarType = 'large' | 'normal' | 'small';

export const StyledAvatar = styled.button<{
  avatarStyle: StyledAvatarType;
  src: string;
}>`
  cursor: pointer;
  border-radius: 50%;
  background-image: url(${({ src }) => src});
  background-position-x: 50%;
  object-fit: cover;
  margin: 10px;
  ${({ avatarStyle }) =>
    avatarStyle === 'large' &&
    `
        width: 100px;
        height: 100px;
  background-size: auto 100px;
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
