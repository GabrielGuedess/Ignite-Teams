import styled, { css, DefaultTheme } from 'styled-components/native';

import { FilterProps } from '.';

const containerModifiers = {
  isActive: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.green_700};
  `,
};

export const Container = styled.TouchableOpacity<Pick<FilterProps, 'isActive'>>`
  ${({ theme, isActive }) => css`
    border-radius: 4px;
    margin-right: 12px;
    height: 38px;
    width: 70px;
    align-items: center;
    justify-content: center;

    ${isActive && containerModifiers.isActive(theme)}
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.sizes.sm}px;
    color: ${theme.colors.white};
    text-transform: uppercase;
  `}
`;
