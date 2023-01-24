import React from 'react';
import { TextInputProps } from 'react-native';

import { useTheme } from 'styled-components/native';

import * as S from './styles';

export const Input = ({ ...props }: TextInputProps) => {
  const { colors } = useTheme();

  return <S.Container placeholderTextColor={colors.gray_300} {...props} />;
};
