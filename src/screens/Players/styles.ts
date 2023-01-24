import styled, { css } from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.gray_600};
    padding: 24px;
  `}
`;

export const Form = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    border-radius: 6px;
    background: ${theme.colors.gray_700};
  `}
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.sizes.sm}px;
  `}
`;
