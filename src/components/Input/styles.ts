import styled, { css } from 'styled-components/native';

export const Container = styled.TextInput`
  ${({ theme }) => css`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    border-radius: 6px;
    padding: 16px;
    background: ${theme.colors.gray_700};
    color: ${theme.colors.white};
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.sizes.md}px;
  `}
`;
