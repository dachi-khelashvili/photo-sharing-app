import styled, { css } from 'styled-components';
import { THEME } from 'consts';

const baseLogoStyles = css`
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;

  display: flex;
  align-items: center;

  &:hover {
    opacity: ${THEME.OPACITY.LOGO.HOVER};
  }

  &:active {
    opacity: ${THEME.OPACITY.LOGO.ACTIVE};
  }

  color: ${THEME.COLORS.TEXT.BLACK_OLIVE};

  .first {
    color: ${THEME.COLORS.TEXT.DARK_MAGENTA};
  }

  .second {
    color: ${THEME.COLORS.TEXT.DOGWOOD_ROSE};
  }
`;

export const SmallLogo = styled.button`
  ${baseLogoStyles}

  font-size: 21px;

  img {
    width: 26px;
  }

  @media (max-width: 1024px) {
    font-size: 20px;

    img {
      width: 24px;
    }
  }

  @media (max-width: 768px) {
    font-size: 18px;

    img {
      width: 22px;
    }
  }
`;

export const BasicLogo = styled.button`
  ${baseLogoStyles}

  font-size: 25px;

  img {
    width: 37px;
  }

  @media (max-width: 1024px) {
    font-size: 23px;

    img {
      width: 29px;
    }
  }

  @media (max-width: 768px) {
    font-size: 22px;

    img {
      width: 26px;
    }
  }
`;
