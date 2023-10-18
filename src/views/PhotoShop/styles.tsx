import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardStyle = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: fit-content;
  object-fit: contain;
  margin: 20px;
  box-shadow: 10px 10px 20px grey;
`;
