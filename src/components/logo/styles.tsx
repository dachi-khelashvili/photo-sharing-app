import styled, { css } from 'styled-components';
import { THEME } from 'consts';

const baseLogoStyles = css`
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;

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
  }

  &:hover {
    opacity: ${THEME.OPACITY.LOGO.HOVER};
  }

  &:active {
    opacity: ${THEME.OPACITY.LOGO.ACTIVE};
  }
`;

export const DarkLogo = styled.button`
  ${baseLogoStyles}
  color: ${THEME.COLORS.TEXT.PRIMARY};

  .first {
    color: ${THEME.COLORS.TEXT.PINK};
  }

  .second {
    color: ${THEME.COLORS.TEXT.RED};
  }
`;

export const LightLogo = styled.button`
  ${baseLogoStyles}
  color: ${THEME.COLORS.TEXT.LIGHT};

  .first {
    color: ${THEME.COLORS.TEXT.LIGHTPINK};
  }

  .second {
    color: ${THEME.COLORS.TEXT.LIGHTRED};
  }

  img {
    filter: brightness(1000%);
  }
`;
