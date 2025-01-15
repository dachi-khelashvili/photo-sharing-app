import styled from 'styled-components';

export const SearchBar = styled.input`
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 0.5rem;
  margin: 1rem 0;
  background-color: #ffffff;

  font-size: 16px;
  line-height: 16px;

  width: 50vw;
  min-width: 300px;

  &:focus {
    background-color: #cccccc;
  }
`;
