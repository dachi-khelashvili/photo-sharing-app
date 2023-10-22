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

export const Container = styled.header`
  position: sticky;
  top: 0;
  height: 60px;
  padding: 0 20px;
  border: 3px solid white;
  border-width: 0 0 3px 0;

  background-color: white;
  box-shadow: 0 0 5px 0 black;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  color: rgb(34, 34, 34);

  display: flex;
  align-items: center;
  gap: 5px;

  text-decoration: none;

  &:hover {
    color: rgb(34, 34, 34);
  }
`;

export const LogoIcon = styled.img`
  width: auto;
  height: 32px;
`;

export const LogoTitle = styled.h1`
  margin: 0;
  padding: 0;

  font-size: 20px;
`;

export const LinkGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const GoToLink = styled(Link)`
  color: rgb(34, 34, 34);

  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
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

export const Description = styled.a``;

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
