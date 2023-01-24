import React from 'react';

import logoImg from 'assets/logo.png';

import * as S from './styles';

type HeaderProps = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: HeaderProps) => (
  <S.Container>
    {showBackButton && (
      <S.BackButton>
        <S.BackIcon />
      </S.BackButton>
    )}

    <S.Logo source={logoImg} />
  </S.Container>
);
