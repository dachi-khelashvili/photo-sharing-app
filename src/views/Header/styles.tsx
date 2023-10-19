import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  margin-left: 20px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexAvatar = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
`;

export const WidthGrid = styled.div`
  display: grid;
  width: 60%;
  gap: 30px;
`;

export const RightGrid = styled.div`
  margin-left: auto;
`;

export const Appbar = styled.div`
  display: flex;
  /* position: absolute; */
  width: 100%;
  height: 60px;
  padding: 12px;
  align-items: center;
`;

export const Logo = styled.img`
  height: 100%;
  object-fit: cover;
  margin-right: 2%;
`;

export const GoToLink = styled(Link)`
  text-decoration-line: none;
  display: inline;
  margin-left: auto;
  margin-right: 2%;
  font-weight: 500;
  color: #6d6d6d;
  &:hover {
    color: #1b1b1b;
  }

  font-size: 14px;
  line-height: 1;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 1;
  }
`;

export const ShortMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 150px;
  height: fit-content;
  background-color: #ffffff;
  box-shadow: 5px 5px 20px grey;
  padding: 5px;
  border-radius: 5px;
  display: grid;
  align-items: center;
`;

export const Avatars = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin: 10px;
`;

export const Description = styled.a`
  font-family: sans-serif;
`;

export const ImageCropper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

export const ProfilePic = styled.img`
  display: inline;
  margin: 0 auto;
  margin-left: -10%;
  height: 100%;
  width: auto;
`;
