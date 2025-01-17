import React, { useState } from 'react';
import { Label, Input, Container } from './styles';
import { INPUTSTATE, validateEmail } from 'consts';

interface EmailInputProps {
  onChange: (value: string) => void;
  label: string;
  value: string;
  className?: string;
}

export const EmailInput: React.FC<EmailInputProps> = ({
  onChange,
  label,
  value,
  className,
}) => {
  const [inputState, setInputState] = useState<INPUTSTATE>(
    value ? INPUTSTATE.VALUED : INPUTSTATE.NORMAL
  );

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    onChange(email);
    setInputState(
      !validateEmail(email) ? INPUTSTATE.INVALID : INPUTSTATE.EDITED
    );
  };

  const handleInputBlur = () => {
    setInputState(
      value
        ? inputState === INPUTSTATE.INVALID
          ? INPUTSTATE.INVALID
          : INPUTSTATE.VALUED
        : INPUTSTATE.NORMAL
    );
  };

  const handleFocus = () => {
    setInputState(
      inputState === INPUTSTATE.INVALID ? INPUTSTATE.INVALID : INPUTSTATE.EDITED
    );
  };

  return (
    <Container className={className}>
      <Label $inputState={inputState}>
        {inputState === INPUTSTATE.INVALID && 'Invalid'} {label}
      </Label>
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
