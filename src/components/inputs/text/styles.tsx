import styled from 'styled-components';

export const Label = styled.label<{
  $state: {
    isFilled: boolean;
    isValid: boolean;
    isFocused: boolean;
  };
}>`
  position: absolute;
  margin-left: 20px;
  font-weight: 500;
  transition: all 200ms;
  color: ${({ $state }) => {
    if ($state.isFilled && $state.isFocused) return 'var(--focused)';
    if (!$state.isValid) return 'var(--invalid)';
    return 'var(--label)';
  }};
  top: ${({ $state }) => ($state.isFilled ? 3 : 10)}px;
  ${({ $state }) => $state.isFilled && 'font-size: 12px;'}
`;

export const Input = styled.input`
  border: none;
  font-size: 15px;
  color: var(--text);
  background-color: transparent;
  padding: 18px 15px 2px 15px;
  font-weight: normal;
  z-index: 1;
  width: 100%;
`;

export const Container = styled.div<{
  $state: {
    isFilled: boolean;
    isValid: boolean;
    isFocused: boolean;
  };
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--background);
  transition: border 200ms;
  border-radius: 10px;
  border: 2px solid;
  border-color: ${({ $state }) => {
    if ($state.isFocused) return 'var(--focused)';
    if (!$state.isValid) return 'var(--invalid)';
    return 'var(--border)';
  }};
`;
