import styled from 'styled-components';

export const Container = styled.button`
  width: 28px;
  height: 28px;

  @media (max-width: 1024px) {
    width: 26px;
    width: 26px;
  }

  @media (max-width: 768px) {
    width: 24px;
    width: 24px;
  }

  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
  object-fit: cover;
`;
