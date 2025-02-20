import React, { useState } from 'react';
import { Label, Input, Container } from './styles';
import { snakeCase } from 'utils';

export interface TextInputProps {
  value?: string;
  onChange?: (value: string) => void;
  label: string;
  name?: string;
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
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
  }>({
    isFilled: value ? true : false,
    isValid: true,
    isFocused: false,
  });

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setState({
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

  return (
    <Container className={className} $state={state}>
      <Label $state={state}>{label}</Label>
      <Input
        name={name ? name : snakeCase(label)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
    </Container>
  );
};
