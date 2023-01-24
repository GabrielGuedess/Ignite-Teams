import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

export type FilterProps = {
  title: string;
  isActive?: boolean;
} & TouchableOpacityProps;

export const Filter = ({ title, isActive = false, ...props }: FilterProps) => (
  <S.Container isActive={isActive} {...props}>
    <S.Title>{title}</S.Title>
  </S.Container>
);
