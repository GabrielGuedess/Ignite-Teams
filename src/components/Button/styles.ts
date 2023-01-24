import styled, { css } from 'styled-components/native';

type ContainerProps = {
  type: 'primary' | 'secondary';
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme, type }) => css`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    margin-bottom: 42px;
    background: ${type === 'primary'
      ? theme.colors.green_700
      : theme.colors.red_dark};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md}px;
    font-family: ${theme.font.family.bold};
    color: ${theme.colors.white};
  `}
`;
