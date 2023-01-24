import React from 'react';

import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { Highlight } from 'components/Highlight';

import * as S from './styles';

export const NewGroup = () => (
  <S.Container>
    <Header showBackButton />

    <S.Content>
      <S.Icon />

      <Highlight
        title='Nova Turma'
        subtitle='crie uma turma para adicionar pessoas'
      />

      <Button title='Criar' />
    </S.Content>
  </S.Container>
);
