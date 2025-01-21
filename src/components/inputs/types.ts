import { INPUTSTATE } from 'consts';

export interface InputProps {
  onChange: (value: string) => void;
  label: string;
  value: string;
  className?: string;
}

export interface StyledProps {
  $inputState: INPUTSTATE;
}
