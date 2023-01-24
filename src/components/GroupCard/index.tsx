import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type GroupCardProps = {
  title: string;
} & TouchableOpacityProps;

export const GroupCard = ({ title, ...props }: GroupCardProps) => (
  <S.Container activeOpacity={0.7} {...props}>
    <S.Icon />
    <S.Title>{title}</S.Title>
  </S.Container>
);
