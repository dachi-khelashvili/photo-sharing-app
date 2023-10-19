import React from 'react';
import { Button, Icon } from './styles';

interface IconButtonProps {
  iconPath: string;
  width: string;
  height: string;
  marginLeft: string;
  marginRight: string;
  onClick: () => void;
}

export const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button
      marginLeft={props.marginLeft}
      onClick={props.onClick}
      marginRight={props.marginRight ? props.marginRight : '0px'}
    >
      <Icon width={props.width} height={props.height} src={props.iconPath} />
    </Button>
  );
};
