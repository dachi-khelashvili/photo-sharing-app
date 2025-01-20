import styled from 'styled-components';

export const Container = styled.main``;

export const SearchSection = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background: url('./back.png') no-repeat center / cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 30px;
  justify-content: center;
`;

export const BlockSection = styled.div`
  display: grid;
  width: 100%;
  padding: 60px 10%;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 60px 60px;
  }

  @media (max-width: 480px) {
    padding: 30px 30px;
  }
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 500px;

  @media (max-width: 768px) {
    display: grid;
    width: 100%;
    justify-content: center;
    height: fit-content;
    max-height: 500px;
  }
`;

export const BlockReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 2rem;
  height: 500px;

  @media (max-width: 768px) {
    display: grid;
    width: 100%;
    justify-content: center;
    height: fit-content;
    max-height: 500px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const ContextEnd = styled.div`
  min-width: 40%;
  display: grid;
  gap: 1rem;
  color: #333333;
  text-align: end;

  @media (max-width: 768px) {
    text-align: start;
    gap: 0.5rem;
    min-width: 0;
  }
`;

export const ContextStart = styled.div`
  min-width: 40%;
  display: grid;
  gap: 1rem;
  color: #333333;
  text-align: start;

  @media (max-width: 768px) {
    gap: 0.5rem;
    min-width: 0;
  }
`;
