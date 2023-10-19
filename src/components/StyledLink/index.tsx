import React from 'react';
import { Link } from 'react-router-dom';

interface StyledLinkComponentProps {
  path: string;
  children: React.ReactNode;
}

export const StyledLinkComponent: React.FC<StyledLinkComponentProps> = ({
  path,
  children,
}) => {
  return (
    <Link
      to={path}
      style={{ width: '100%', textDecoration: 'none', color: 'white' }}
    >
      <div className="margin-left-10">{children}</div>
    </Link>
  );
};
