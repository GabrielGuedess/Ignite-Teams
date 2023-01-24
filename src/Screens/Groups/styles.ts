import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 24px;
    background: ${theme.colors.gray_600};
  `}
`;
