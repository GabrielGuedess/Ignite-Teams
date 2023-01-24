import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type ButtonProps = {
  title: string;
  type?: 'primary' | 'secondary';
} & TouchableOpacityProps;

export const Button = ({ title, type = 'primary', ...props }: ButtonProps) => (
  <S.Container type={type} activeOpacity={0.7} {...props}>
    <S.Title>{title}</S.Title>
  </S.Container>
);
