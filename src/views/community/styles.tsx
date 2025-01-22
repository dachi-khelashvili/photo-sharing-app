import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;

  padding: 40px 60px 10px 60px;

  @media (max-width: 480px) {
    padding: 20px 30px 10px 30px;
  }

  gap: 10px;

  width: 100%;
  height: calc(100vh - 60px);
`;

export const ImageTable = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: auto auto auto auto;

  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  padding: 0 4px 0 0;

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
    gap: 30px;
  }

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
