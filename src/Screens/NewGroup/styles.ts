import styled, { css } from 'styled-components/native';

import { UsersThree } from 'phosphor-react-native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 24px;
    background: ${theme.colors.gray_600};
  `}
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.colors.green_700,
  size: 56,
}))`
  align-self: center;
`;
