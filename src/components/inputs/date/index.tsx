import React, { useState } from 'react';
import { Label, Input, Container } from './styles';
import { INPUTSTATE } from 'consts';

interface DateInputProps {
  onChange: (value: string) => void;
  label: string;
  value: string;
  className?: string;
}

export const DateInput: React.FC<DateInputProps> = ({
  onChange,
  label,
  value,
  className,
}) => {
  const [inputState, setInputState] = useState<INPUTSTATE>(
    value ? INPUTSTATE.VALUED : INPUTSTATE.NORMAL
  );

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputState(event.target.value ? INPUTSTATE.VALUED : INPUTSTATE.NORMAL);
  };

  return (
    <Container className={className}>
      <Label $inputState={inputState}>{label}</Label>
      <Input
        type="date"
        $inputState={inputState}
        value={value}
        onChange={handleDateChange}
        onFocus={() => setInputState(INPUTSTATE.EDITED)}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};
