import styled from 'styled-components';
import { THEME } from 'consts';
import BackImage from 'assets/images/background.png';

export const Container = styled.div`
  height: calc(100vh - 60px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${BackImage});
  background-size: cover;
  background-position: center;

  padding: 30px 30px;
`;

export const Frame = styled.div`
  background-color: white;

  width: 100%;
  padding: 30px;
  border-radius: 10px;
  max-width: 400px;

  box-shadow: ${THEME.BOX_SHADOW.DEFAULT};

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const BigFrame = styled.div`
  background-color: white;

  width: 100%;
  padding: 30px;
  border-radius: 10px;
  max-width: 480px;

  box-shadow: ${THEME.BOX_SHADOW.DEFAULT};

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Center = styled.p`
  color: ${THEME.COLORS.TEXT.DARK_LAVENDAR};
  text-align: center;
  font-weight: 500;
`;

export const SmallBold = styled.h6`
  color: ${THEME.COLORS.TEXT.ENGLISH_VIOLET};
  text-align: left;
  font-weight: 500;
`;

export const Bold = styled.p`
  color: ${THEME.COLORS.TEXT.ENGLISH_VIOLET};
  text-align: left;
  font-weight: 500;
`;

export const Small = styled.h6`
  color: ${THEME.COLORS.TEXT.DARK_LAVENDAR};
  text-align: left;
  font-weight: normal;
`;

export const Normal = styled.p`
  color: ${THEME.COLORS.TEXT.DARK_LAVENDAR};
  text-align: left;
  min-width: max-content;
`;

export const VGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const HGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 100%;
  align-items: center;
`;

export const Pair = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: content;
`;

export const Heading = styled.h3`
  color: ${THEME.COLORS.TEXT.ENGLISH_VIOLET};
`;

export const Spacer = styled.div`
  flex: 1000;
`;

export const Divider = styled.hr`
  border-color: ${THEME.COLORS.BORDER.ENGLISH_VIOLET_10};
`;

export const Image = styled.img`
  align-self: center;
  width: 56px;

  @media (max-width: 1024px) {
    width: 52px;
  }

  @media (max-width: 768px) {
    width: 48px;
  }
`;
