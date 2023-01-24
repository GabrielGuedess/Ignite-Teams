import { useState } from 'react';
import { FlatList } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { Input } from 'components/Input';
import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { Filter } from 'components/Filter';
import { Highlight } from 'components/Highlight';
import { ListEmpty } from 'components/ListEmpty';
import { PlayerCard } from 'components/PlayerCard';
import { ButtonIcon } from 'components/ButtonIcon';

import * as S from './styles';

type RouteParams = {
  group: string;
};

export const Players = () => {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

  const { params } = useRoute();
  const { group } = params as RouteParams;

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight title={group} subtitle='adicione a galera e separe os times' />

      <S.Form>
        <Input placeholder='Nome do participante' autoCorrect={false} />
        <ButtonIcon icon='add' />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />

        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message='Não há pessoas nesse time' />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button type='secondary' title='Remover turma' />
    </S.Container>
  );
};
