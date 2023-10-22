import { HTMLAttributes } from 'react';
import { Input } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LabeledInputProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
}

export const LabeledInput: React.FC<LabeledInputProps> = (props) => {
  return <Input {...props} />;
};
