import React, { useState } from 'react';
import { Container, Select, Label, Option } from './styles';
import { INPUTSTATE } from 'consts';
import { InputProps } from '../types';

interface SelectInputProps extends InputProps {
  items: string[];
}

export const SelectInput: React.FC<SelectInputProps> = ({
  items,
  value,
  label,
  className,
  onChange,
}) => {
  const [inputState, setInputState] = useState<INPUTSTATE>(
    value ? INPUTSTATE.VALUED : INPUTSTATE.NORMAL
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    setInputState(event.target.value ? INPUTSTATE.VALUED : INPUTSTATE.NORMAL);
  };

  const handleFocus = () => {
    setInputState(INPUTSTATE.EDITED);
  };

  return (
    <Container className={className} $inputState={inputState}>
      <Label $inputState={inputState}>{label}</Label>
      <Select
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
      >
        <Option></Option>
        {items.map((item) => {
          return <Option>{item}</Option>;
        })}
      </Select>
    </Container>
  );
};
