import React, { useState } from 'react';
import { Label, Input, Container } from './styles';
import { INPUTSTATE } from 'consts';
import { InputProps } from '../types';

export const TextInput: React.FC<InputProps> = ({
  onChange,
  label,
  value,
  className,
}) => {
  const [inputState, setInputState] = useState<INPUTSTATE>(
    value ? INPUTSTATE.VALUED : INPUTSTATE.NORMAL
  );

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputState(event.target.value ? INPUTSTATE.VALUED : INPUTSTATE.NORMAL);
  };

  const handleFocus = () => {
    setInputState(INPUTSTATE.EDITED);
  };

  return (
    <Container className={className}>
      <Label $inputState={inputState}>{label}</Label>
      <Input
        $inputState={inputState}
        value={value}
        onChange={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};
