import React, { useState } from 'react';
import { Label, Input, Container, InvalidLabel } from './styles';
import { validatePassword } from 'consts';
import { IconButton } from 'components';

interface PasswordInputProps {
  onChange: (e: string) => void;
  label: string;
  isValidatable: boolean;
}

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [state, setState] = useState('STATE_NORMAL');
  const [inputType, setInputType] = useState('password');

  return (
    <Container>
      <Label id={state}>
        <InvalidLabel id={state}>Weak</InvalidLabel>
        {props.label}
      </Label>
      <Input
        type={inputType}
        id={state}
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
        marginLeft="-50px"
        marginRight="10px"
        iconPath={'./' + inputType + '-eye.png'}
        onClick={() => {
          if (inputType == 'password') setInputType('normal');
          else setInputType('password');
        }}
      />
    </Container>
  );
};
