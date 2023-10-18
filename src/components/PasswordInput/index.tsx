import React, { useState } from 'react';
import { Label, Input, Frame, WeakLabel, Button } from './styles';

interface PasswordInputProps {
  onChange: (e: string) => void;
  label: string;
  validate: boolean;
  value: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [state, setState] = useState('normal');
  const [eye, setEye] = useState('password');

  return (
    <Frame>
      <Label id={state}>
        <WeakLabel id={state}>Weak</WeakLabel>
        {props.label}
      </Label>
      <Input
        type={eye}
        id={state}
        onChange={(e) => {
          const temp = e.target.value;
          if (props.validate == true) {
            if (temp.length >= 8) {
              setState('edited');
              props.onChange(temp);
            } else {
              setState('weak');
              props.onChange('');
            }
          } else props.onChange(temp);
        }}
        onFocus={() => {
          if (state != 'weak') setState('edited');
        }}
        onBlur={(e) => {
          const temp = e.target.value;
          if (temp.length == 0) setState('normal');
        }}
        value={props.value}
      ></Input>
      <Button
        id={state}
        icon={eye}
        onClick={() => {
          if (eye == 'password') setEye('normal');
          else setEye('password');
        }}
      ></Button>
    </Frame>
  );
};
