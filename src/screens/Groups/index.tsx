import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { Highlight } from 'components/Highlight';
import { GroupCard } from 'components/GroupCard';
import { ListEmpty } from 'components/ListEmpty';

import * as S from './styles';

export const Groups = () => {
  const [groups, setGroups] = useState([]);

  const { navigate } = useNavigation();

  return (
    <S.Container>
      <Header />

      <Highlight title='Turmas' subtitle='jogue com a sua turma' />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListEmpty message='Que tal cadastrar a primeira turma?' />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />

      <Button title='Criar nova turma' onPress={() => navigate('new')} />
    </S.Container>
  );
};
