import React from 'react';

interface Option {
  value: number;
  label: string;
}

interface RadioProps {
  name: string;
  options: Array<Option>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: React.FC<RadioProps> = ({ name, options, onChange }) => {
  return (
    <div className="grid">
      {options.map((option: Option, index: number) => (
        <label key={index} style={{ fontSize: '24px', margin: 'auto' }}>
          <input
            type="radio"
            name={name}
            value={option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
