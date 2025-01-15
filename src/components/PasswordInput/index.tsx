import React, { useState } from 'react';
import { Label, Input, Container, InvalidLabel, EyeButton } from './styles';
import { validatePassword } from 'consts';
import { Eye, EyeClosed } from 'lucide-react';

interface PasswordInputProps {
  value: string;
  onChange: (e: string) => void;
  label: string;
  isValidatable: boolean;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  label,
  isValidatable,
}) => {
  const [state, setState] = useState('STATE_NORMAL');
  const [visible, setVisible] = useState(true);

  return (
    <Container>
      <Label state={state}>
        <InvalidLabel state={state}>Weak</InvalidLabel>
        {label}
      </Label>
      <Input
        value={value}
        type={visible ? 'password' : 'normal'}
        state={state}
        onChange={(e) => {
          const temp = e.target.value;
          if (isValidatable == true) {
            if (validatePassword(temp)) {
              setState('STATE_EDITED');
              onChange(temp);
            } else {
              setState('STATE_INVALID');
              onChange(temp);
            }
          } else onChange(temp);
        }}
        onFocus={() => {
          if (state != 'STATE_INVALID') setState('STATE_EDITED');
        }}
        onBlur={(e) => {
          if (e.target.value.length == 0) setState('STATE_NORMAL');
        }}
      ></Input>
      <EyeButton onClick={() => setVisible(!visible)}>
        {visible ? <Eye color="#898989" /> : <EyeClosed color="#898989" />}
      </EyeButton>
    </Container>
  );
};
