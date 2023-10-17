import React, { useState } from 'react';
import { Label, Input, Frame, InvalidLabel } from './styles';

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

interface EmailInputProps {
  onChange: (e: string) => void;
}

export const EmailInput: React.FC<EmailInputProps> = ({ onChange }) => {
  const [state, setState] = useState('normal');

  return (
    <Frame>
      <Label id={state}>
        <InvalidLabel id={state}>Invalid</InvalidLabel>Email Address
      </Label>
      <Input
        id={state}
        onChange={(e) => {
          const temp = e.target.value;
          if (validateEmail(temp)) {
            setState('edited');
            onChange(temp);
          } else {
            setState('invalid');
            onChange('');
          }
          console.log(state);
        }}
        onFocus={() => {
          if (state != 'invalid') setState('edited');
        }}
        onBlur={(e) => {
          const temp = e.target.value;
          if (temp.length == 0) setState('normal');
        }}
      ></Input>
    </Frame>
  );
};
