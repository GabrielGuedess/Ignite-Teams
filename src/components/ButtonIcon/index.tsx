import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import * as S from './styles';

export type ButtonIconProps = {
  type?: 'primary' | 'secondary';
  icon: keyof typeof MaterialIcons.glyphMap;
} & TouchableOpacityProps;

export const ButtonIcon = ({
  type = 'primary',
  icon,
  ...props
}: ButtonIconProps) => (
  <S.Container activeOpacity={0.7} {...props}>
    <S.Icon name={icon} type={type} />
  </S.Container>
);
