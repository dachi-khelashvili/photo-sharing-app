import React, { useState } from 'react';
import { Label, Input, Container, Button } from './styles';
import { Eye, EyeClosed } from 'lucide-react';
import { INPUTSTATE } from 'consts';

interface PasswordInputProps {
  onChange: (value: string) => void;
  label: string;
  value: string;
  className?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  onChange,
  label,
  value,
  className,
}) => {
  const [inputState, setInputState] = useState<INPUTSTATE>(
    value ? INPUTSTATE.VALUED : INPUTSTATE.NORMAL
  );

  const [eyeState, setEyeState] = useState<boolean>(true);

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
        type={eyeState ? 'password' : 'default'}
        $inputState={inputState}
        value={value}
        onChange={handleTextChange}
        onFocus={() => setInputState(INPUTSTATE.EDITED)}
        onBlur={handleInputBlur}
      />
      <Button onClick={() => setEyeState(!eyeState)}>
        {eyeState ? <Eye /> : <EyeClosed />}
      </Button>
    </Container>
  );
};
