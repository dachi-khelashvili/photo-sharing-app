import React, { useState } from 'react';
import { Label, Input, Container } from './styles';
import { INPUTSTATE } from 'consts';

interface BasicInputProps {
  onChange: (value: string) => void;
  label: string;
  value: string;
  className?: string;
}

export const BasicInput: React.FC<BasicInputProps> = ({
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

  return (
    <Container className={className}>
      <Label $inputState={inputState}>{label}</Label>
      <Input
        $inputState={inputState}
        value={value}
        onChange={handleTextChange}
        onFocus={() => setInputState(INPUTSTATE.EDITED)}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};
