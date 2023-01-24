import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.xl}px;
    font-family: ${theme.font.family.bold};
    color: ${theme.colors.white};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.md}px;
    font-family: ${theme.font.family.regular};
    color: ${theme.colors.gray_300};
  `}
`;
