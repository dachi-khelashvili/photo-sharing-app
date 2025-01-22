import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const FlexItem = styled.div`
  display: flex;
  gap: 10px;
`;

export const ImageTable = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: auto auto auto auto;
  padding: 60px;

  height: 100vh;
  overflow-y: scroll;

  @media (max-width: 1280px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 1024px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 640px) {
    grid-template-columns: auto;
  }

  @media (max-width: 480px) {
    padding: 30px;
    gap: 30px;
  }
`;

export const Typography = styled.p``;

export const Search = styled.input`
  background-color: #d2d2d2;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
`;

export const RightGrid = styled.div``;
