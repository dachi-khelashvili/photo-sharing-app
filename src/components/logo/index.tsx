import React from 'react';
import { SmallLogo, BasicLogo } from './styles';
import { SIZESTYLE, PATH } from 'consts';
import { useNavigate } from 'react-router-dom';
import LogoIcon from 'assets/images/logo.svg';

interface LogoProps {
  style: SIZESTYLE;
}

export const Logo: React.FC<LogoProps> = ({ style }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(PATH.HOME);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const LogoComponent = style === SIZESTYLE.SMALL ? SmallLogo : BasicLogo;

  return (
    <LogoComponent onClick={handleClick} aria-label="Go to homepage">
      <div className="first">F</div>
      <div className="second">o</div>
      <div>t</div>
      <img src={LogoIcon} alt="Fotz logo" />
      <div>z</div>
    </LogoComponent>
  );
};
