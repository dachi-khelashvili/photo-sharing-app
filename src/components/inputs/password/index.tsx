import React, { useState } from 'react';
import { Label, Input, Container, Button } from './styles';
import { Eye, EyeClosed } from 'lucide-react';
import { INPUTSTATE, THEME } from 'consts';
import { InputProps } from '../types';

export const PasswordInput: React.FC<InputProps> = ({
  onChange,
  label,
  value,
  className,
}) => {
  const [eyeState, setEyeState] = useState<boolean>(true);

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
        type={eyeState ? 'password' : 'text'}
        $inputState={inputState}
        value={value}
        onChange={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleInputBlur}
      />
      <Button onClick={() => setEyeState(!eyeState)}>
        {eyeState ? (
          <Eye size={20} color={THEME.COLORS.TEXT.ENGLISH_VIOLET} />
        ) : (
          <EyeClosed size={20} color={THEME.COLORS.TEXT.ENGLISH_VIOLET} />
        )}
      </Button>
    </Container>
  );
};
