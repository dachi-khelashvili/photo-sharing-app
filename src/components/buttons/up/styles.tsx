import styled from 'styled-components';

export const Container = styled.button`
  position: fixed;
  bottom: 2rem;
  right: calc(5% - 24px);

  @media (max-width: 768px) {
    right: 16px;
  }

  @media (max-width: 480px) {
    right: 8px;
  }

  z-index: 2;
  background-color: #00000060;
  border-radius: 50%;
  border: none;
  height: 3rem;
  width: 3rem;
  color: #fff;
  cursor: pointer;
  animation: movebtn 3s ease-in-out infinite;
  transition: all 0.5s ease-in-out;
  &:hover {
    animation: none;
    background: #000000a0;
  }
  @keyframes movebtn {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const SVG = styled.img`
  width: 100%;
`;
