import React from 'react';

import { useNavigation } from '@react-navigation/native';

import logoImg from 'assets/logo.png';

import * as S from './styles';

type HeaderProps = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: HeaderProps) => {
  const { navigate } = useNavigation();

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={() => navigate('groups')}>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logoImg} />
    </S.Container>
  );
};
