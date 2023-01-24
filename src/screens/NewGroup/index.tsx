import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Input } from 'components/Input';
import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { Highlight } from 'components/Highlight';

import * as S from './styles';

export const NewGroup = () => {
  const [team, setTeam] = useState('');

  const { navigate } = useNavigation();

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
          onChangeText={setTeam}
          value={team}
        />

        <Button
          title='Criar'
          style={{ marginTop: 20 }}
          onPress={() => navigate('players', { group: team })}
        />
      </S.Content>
    </S.Container>
  );
};
