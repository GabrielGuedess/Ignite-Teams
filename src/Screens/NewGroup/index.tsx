import React from 'react';

import { Input } from 'components/Input';
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

      <Input placeholder='Nome da turma' />

      <Button title='Criar' style={{ marginTop: 20 }} />
    </S.Content>
  </S.Container>
);
