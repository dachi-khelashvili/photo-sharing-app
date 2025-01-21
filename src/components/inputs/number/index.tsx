import React, { useState } from 'react';
import { Label, Input, Container } from './styles';
import { INPUTSTATE } from 'consts';
import { InputProps } from '../types';

export const NumberInput: React.FC<InputProps> = ({
  onChange,
  label,
  value,
  className,
}) => {
  const [inputState, setInputState] = useState<INPUTSTATE>(
    value ? INPUTSTATE.VALUED : INPUTSTATE.NORMAL
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numValue = parseInt(value, 10);

    if (value === '') {
      onChange('');
    } else if (!isNaN(numValue)) {
      // Clamp value between 1 and 99
      const clampedValue = Math.min(Math.max(numValue, 1), 99);
      onChange(clampedValue.toString());
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputState(event.target.value ? INPUTSTATE.VALUED : INPUTSTATE.NORMAL);
  };

  const handleFocus = () => {
    setInputState(INPUTSTATE.EDITED);
  };

  return (
    <Container className={className}>
      <Label $inputState={inputState}>{label}</Label>
      <Input
        type="number"
        $inputState={inputState}
        value={value}
        max="99"
        min="1"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Container>
  );
};
