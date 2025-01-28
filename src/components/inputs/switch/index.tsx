import React, { useState } from 'react';
import { Label, Input, Container, Button } from './styles';
import { Mail, User } from 'lucide-react';
import { INPUTSTATE, THEME } from 'consts';
import { InputProps } from '../types';

interface LoginInputProps extends InputProps {
  onSwitch: (label: string) => void;
}

export const LoginInput: React.FC<LoginInputProps> = ({
  onSwitch,
  label,
  onChange,
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
        type="text"
        $inputState={inputState}
        value={value}
        onChange={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleInputBlur}
      />
      <Button onClick={() => onSwitch(label == 'Email' ? 'Username' : 'Email')}>
        {label == 'Email' ? (
          <User size={20} color={THEME.COLORS.TEXT.ENGLISH_VIOLET} />
        ) : (
          <Mail size={20} color={THEME.COLORS.TEXT.ENGLISH_VIOLET} />
        )}
      </Button>
    </Container>
  );
};
