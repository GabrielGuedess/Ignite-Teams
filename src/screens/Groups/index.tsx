import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { Loading } from 'components/Loading';
import { Highlight } from 'components/Highlight';
import { GroupCard } from 'components/GroupCard';
import { ListEmpty } from 'components/ListEmpty';

import { groupsGetAll } from 'storage/group/groupsGetAll';

import * as S from './styles';

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { navigate } = useNavigation();

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();

      setGroups(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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

      {isLoading ? (
        <Loading />
      ) : (
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
      )}

      <Button title='Criar nova turma' onPress={() => navigate('new')} />
    </S.Container>
  );
};
