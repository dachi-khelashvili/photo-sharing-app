import { Input } from './styles';

type StyledInputProps = {
  width: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const StyledInput: React.FC<StyledInputProps> = ({
  width,
  label,
  onChange,
}) => {
  return <Input width={width} placeholder={label} onChange={onChange} />;
};
