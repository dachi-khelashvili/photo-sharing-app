import React from 'react';
import { Input, Container } from './styles';
import { Search as SearchIcon } from 'lucide-react';
import { THEME } from 'consts';

type SearchProps = {
  label: string;
};

export const Search: React.FC<SearchProps> = ({ label }) => {
  return (
    <Container>
      <SearchIcon color={THEME.COLORS.TEXT.BLACK_OLIVE} size={20} />
      <Input placeholder={label}></Input>
    </Container>
  );
};
