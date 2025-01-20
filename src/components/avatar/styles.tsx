import styled from 'styled-components';

export const SmallContainer = styled.button`
  width: 28px;
  min-width: 28px;
  height: 28px;

  @media (max-width: 1024px) {
    width: 26px;
    min-width: 26px;
    height: 26px;
  }

  @media (max-width: 768px) {
    width: 24px;
    min-width: 24px;
    height: 24px;
  }

  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const BigContainer = styled.button`
  width: 84px;
  min-width: 84px;
  height: 84px;

  @media (max-width: 1024px) {
    width: 78px;
    min-width: 78px;
    height: 78px;
  }

  @media (max-width: 768px) {
    width: 72px;
    min-width: 72px;
    height: 72px;
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
