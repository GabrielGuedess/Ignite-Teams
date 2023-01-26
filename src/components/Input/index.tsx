import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { useTheme } from 'styled-components/native';

import * as S from './styles';

type InputProps = {
  inputRef?: React.RefObject<TextInput>;
} & TextInputProps;

export const Input = ({ inputRef, ...props }: InputProps) => {
  const { colors } = useTheme();

  return (
    <S.Container
      placeholderTextColor={colors.gray_300}
      ref={inputRef}
      {...props}
    />
  );
};
