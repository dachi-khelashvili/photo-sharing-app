import React, { useCallback } from 'react';
import { SmallLogo, BasicLogo } from './styles';
import { SIZESTYLE, PATH } from 'consts';
import { useNavigate } from 'react-router-dom';

interface LogoProps {
  style: SIZESTYLE;
}

export const Logo: React.FC<LogoProps> = ({ style }) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate(PATH.HOME), [navigate]);

  const LogoComponent = style === SIZESTYLE.SMALL ? SmallLogo : BasicLogo;

  return (
    <LogoComponent onClick={handleClick} aria-label="Go to homepage">
      <div className="first">F</div>
      <div className="second">o</div>
      <div>t</div>
      <img src="./logo.svg" alt="Fotz logo" />
      <div>z</div>
    </LogoComponent>
  );
};
