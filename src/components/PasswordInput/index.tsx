import React, { useState } from 'react';
import { Label, Input, Container, InvalidLabel } from './styles';
import { validatePassword } from 'consts';
import { IconButton } from 'components';

interface PasswordInputProps {
  onChange: (e: string) => void;
  label: string;
  isValidatable: boolean;
  value: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [state, setState] = useState('STATE_NORMAL');
  const [inputType, setInputType] = useState('password');

  return (
    <Container>
      <Label state={state}>
        <InvalidLabel state={state}>Weak</InvalidLabel>
        {props.label}
      </Label>
      <Input
        type={inputType}
        state={state}
        value={props.value}
        onChange={(e) => {
          const temp = e.target.value;
          if (props.isValidatable == true) {
            if (validatePassword(temp)) {
              setState('STATE_EDITED');
              props.onChange(temp);
            } else {
              setState('STATE_INVALID');
              props.onChange('');
            }
          } else props.onChange(temp);
        }}
        onFocus={() => {
          if (state != 'STATE_INVALID') setState('STATE_EDITED');
        }}
        onBlur={(e) => {
          if (e.target.value.length == 0) setState('STATE_NORMAL');
        }}
      ></Input>
      <IconButton
        width="40px"
        height="40px"
        marginleft="-50px"
        marginright="10px"
        iconPath={'./' + inputType + '-eye.png'}
        onClick={() => {
          if (inputType == 'password') setInputType('normal');
          else setInputType('password');
        }}
      />
    </Container>
  );
};
