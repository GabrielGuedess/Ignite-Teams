import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.sm}px;
    font-family: ${theme.font.family.regular};
    color: ${theme.colors.gray_300};
  `}
`;
