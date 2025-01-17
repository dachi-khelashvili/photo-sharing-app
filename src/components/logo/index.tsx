import React, { useCallback } from 'react';
import { DarkLogo, LightLogo } from './styles';
import { COLORSTYLE, PATH } from 'consts';
import { useNavigate } from 'react-router-dom';

interface LogoProps {
  style: COLORSTYLE;
}

export const Logo: React.FC<LogoProps> = ({ style }) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate(PATH.HOME), [navigate]);

  const LogoComponent = style === COLORSTYLE.DARK ? DarkLogo : LightLogo;

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
