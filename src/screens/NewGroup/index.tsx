import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Input } from 'components/Input';
import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { Highlight } from 'components/Highlight';

import { groupCreate } from 'storage/group/groupCreate';

import * as S from './styles';

export const NewGroup = () => {
  const [group, setGroup] = useState('');

  const { navigate } = useNavigation();

  async function handleNew() {
    try {
      await groupCreate(group);
      navigate('players', { group });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />

        <Highlight
          title='Nova Turma'
          subtitle='crie uma turma para adicionar pessoas'
        />

        <Input
          placeholder='Nome da turma'
          onChangeText={setGroup}
          value={group}
        />

        <Button title='Criar' style={{ marginTop: 20 }} onPress={handleNew} />
      </S.Content>
    </S.Container>
  );
};
