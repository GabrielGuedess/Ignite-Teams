import styled, { css } from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    border-radius: 6px;
    background: ${theme.colors.gray_500};
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.sizes.md}px;
    color: ${theme.colors.gray_200};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray_200,
}))`
  margin-left: 16px;
  margin-right: 8px;
`;
