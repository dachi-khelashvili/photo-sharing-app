import styled from 'styled-components';

export const Screen = styled.div`
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SimpleModal = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 30%;
  height: fit-content;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;
