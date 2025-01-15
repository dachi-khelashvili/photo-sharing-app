import React, { useState } from 'react';
import { Label, Input, Container, InvalidLabel, EyeButton } from './styles';
import { validatePassword } from 'consts';
import { Eye, EyeClosed } from 'lucide-react';

enum InputState {
  NORMAL = 'NORMAL',
  EDITED = 'EDITED',
  INVALID = 'INVALID',
}

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  isValidatable?: boolean;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  label,
  isValidatable = false,
}) => {
  const [inputState, setInputState] = useState<InputState>(InputState.NORMAL);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (isValidatable) {
      setInputState(
        validatePassword(newValue) ? InputState.EDITED : InputState.INVALID
      );
    }
    onChange(newValue);
  };

  const handleFocus = () => {
    if (inputState !== InputState.INVALID) {
      setInputState(InputState.EDITED);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setInputState(InputState.NORMAL);
    }
  };

  return (
    <Container>
      <Label state={inputState}>
        <InvalidLabel state={inputState}>Weak</InvalidLabel>
        {label}
      </Label>
      <Input
        value={value}
        type={isPasswordHidden ? 'password' : 'text'}
        state={inputState}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label={label}
        aria-invalid={inputState === InputState.INVALID}
      />
      <EyeButton
        onClick={() => setIsPasswordHidden(!isPasswordHidden)}
        type="button"
        aria-label={isPasswordHidden ? 'Show password' : 'Hide password'}
      >
        {isPasswordHidden ? (
          <Eye color="#898989" />
        ) : (
          <EyeClosed color="#898989" />
        )}
      </EyeButton>
    </Container>
  );
};
