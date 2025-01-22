import { THEME } from 'consts';
import styled from 'styled-components';

export const Screen = styled.div`
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: ${THEME.Z_INDEX.MODAL};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 60px;

  @media (max-width: 480px) {
    padding: 0 30px;
  }

  min-width: 375px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  background-color: white;
  display: grid;
  padding: 20px;
  gap: 10px;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: scroll;
  border-radius: 10px;
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0 10px;
  align-items: center;
`;

export const Box = styled.div`
  padding: 10px;
  border: 2px solid ${THEME.COLORS.BORDER.ENGLISH_VIOLET_10};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
