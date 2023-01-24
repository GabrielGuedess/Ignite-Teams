import styled, { css } from 'styled-components/native';

import { UsersThree } from 'phosphor-react-native';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 90px;
    background: ${theme.colors.gray_500};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    margin-bottom: 12px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md}px;
    color: ${theme.colors.gray_200};
    font-family: ${theme.font.family.regular};
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.green_700,
  weight: 'fill',
}))`
  margin-right: 20px;
`;
