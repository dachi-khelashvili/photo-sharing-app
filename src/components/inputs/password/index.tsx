import React, { useState } from 'react';
import { Label, Input, Container, Button } from './styles';
import { snakeCase } from 'utils';
import { Eye, EyeClosed } from 'lucide-react';

export interface PasswordInputProps {
  value?: string;
  onChange?: (value: string) => void;
  label: string;
  name?: string;
  className?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  className,
  name,
  value,
  onChange,
}) => {
  const [state, setState] = useState<{
    isFilled: boolean;
    isValid: boolean;
    isFocused: boolean;
    isPassword: boolean;
  }>({
    isFilled: value ? true : false,
    isValid: true,
    isFocused: false,
    isPassword: true,
  });

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setState({
      ...state,
      isValid: event.target.value == 'invalid' ? false : true,
      isFilled: !!event.target.value,
      isFocused: false,
    });
  };

  const handleFocus = () => {
    setState({ ...state, isFocused: true, isFilled: true });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, isFilled: true });
    if (onChange) onChange(event.target.value);
  };

  const handleSwitch = () => {
    setState({ ...state, isPassword: !state.isPassword });
  };

  return (
    <Container className={className} $state={state}>
      <Label $state={state}>{label}</Label>
      <Input
        name={name ? name : snakeCase(label)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        type={state.isPassword ? 'password' : 'text'}
      />
      <Button onClick={handleSwitch} tabIndex={-1}>
        {state.isPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
      </Button>
    </Container>
  );
};
