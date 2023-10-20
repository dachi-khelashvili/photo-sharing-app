import React, { useState } from 'react';
import { Label, Input, Container } from './styles';
interface BasicInputProps {
  onChange: (e: string) => void;
  label: string;
}

export const BasicInput: React.FC<BasicInputProps> = (props) => {
  const [state, setState] = useState('STATE_NORMAL');

  return (
    <Container>
      <Label id={state}>{props.label}</Label>
      <Input
        id={state}
        onChange={(e) => props.onChange(e.target.value)}
        onFocus={() => setState('STATE_EDITED')}
        onBlur={(e) => {
          if (e.target.value == '') setState('STATE_NORMAL');
        }}
      ></Input>
    </Container>
  );
};
