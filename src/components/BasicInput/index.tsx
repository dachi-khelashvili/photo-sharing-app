import React, { useState } from 'react';
import { Label, Input, Frame } from './styles';
interface BasicInputProps {
  onChange: (e: string) => void;
  label: string;
}

export const BasicInput: React.FC<BasicInputProps> = (props) => {
  const [state, setState] = useState('normal');

  return (
    <Frame>
      <Label id={state}>{props.label}</Label>
      <Input
        id={state}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
        onFocus={() => {
          setState('edited');
        }}
        onBlur={(e) => {
          if (e.target.value == '') setState('normal');
        }}
      ></Input>
    </Frame>
  );
};
