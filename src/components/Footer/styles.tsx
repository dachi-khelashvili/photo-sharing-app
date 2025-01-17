import styled from 'styled-components';

export const Container = styled.footer`
  color: white;
  background-color: #333333;
  padding: 2rem;
  box-shadow: 0 0 5px 0px black;

  gap: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterTitle = styled.div`
  display: flex;
  align-items: center;

  div {
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    div {
      display: none;
    }
  }

  img {
    width: 30px;
    height: 30px;
    filter: brightness(1000%);
  }
`;
