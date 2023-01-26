import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { Highlight } from 'components/Highlight';
import { GroupCard } from 'components/GroupCard';
import { ListEmpty } from 'components/ListEmpty';

import { groupsGetAll } from 'storage/group/groupsGetAll';

import * as S from './styles';

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>([]);

  const { navigate } = useNavigation();

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();

      setGroups(data);
    } catch (error) {
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />

      <Highlight title='Turmas' subtitle='jogue com a sua turma' />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => navigate('players', { group: item })}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message='Que tal cadastrar a primeira turma?' />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />

      <Button title='Criar nova turma' onPress={() => navigate('new')} />
    </S.Container>
  );
};
