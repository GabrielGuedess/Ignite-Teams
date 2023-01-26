import { useEffect, useState, useRef } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Input } from 'components/Input';
import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { Filter } from 'components/Filter';
import { Loading } from 'components/Loading';
import { Highlight } from 'components/Highlight';
import { ListEmpty } from 'components/ListEmpty';
import { PlayerCard } from 'components/PlayerCard';
import { ButtonIcon } from 'components/ButtonIcon';

import { groupRemoveByName } from 'storage/group/groupRemoveByName';
import { PlayerStorageDTO } from 'storage/players/PlayerStorageDTO';
import { playerAddByGroup } from 'storage/players/playerAddByGroup';
import { playerRemoveByGroup } from 'storage/players/playerRemoveByGroup';
import { playerGetByGroupAndTeam } from 'storage/players/playerGetByGroupAndTeam';

import { AppError } from 'utils/AppError';

import * as S from './styles';

type RouteParams = {
  group: string;
};

export const Players = () => {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const { navigate } = useNavigation();

  const { params } = useRoute();
  const { group } = params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        'Nova Pessoa',
        'Informe o nome da pessoa para adicionar.'
      );
    }

    const newPlayer: PlayerStorageDTO = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();
      setNewPlayerName('');
      await fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Pessoa', error.message);
      } else {
        Alert.alert('Nova Pessoa', 'Não foi possível adicionar.');
        console.error(error);
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true);

      const playersByTeam = await playerGetByGroupAndTeam(group, team);

      setPlayers(playersByTeam);
    } catch (error) {
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.');
      console.error(error);
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigate('groups');
    } catch (error) {
      Alert.alert('Remover grupo', 'Não foi possível remover o grupo.');
      console.error(error);
    }
  }

  async function handleGroupRemove() {
    Alert.alert('Remover', 'Deseja Remover o grupo?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        style: 'destructive',
        onPress: async () => await groupRemove(),
      },
    ]);
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight title={group} subtitle='adicione a galera e separe os times' />

      <S.Form>
        <Input
          placeholder='Nome do participante'
          autoCorrect={false}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddPlayer}
          returnKeyType='done'
          onChangeText={setNewPlayerName}
          value={newPlayerName}
        />
        <ButtonIcon icon='add' onPress={handleAddPlayer} />
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

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={item => item.name}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handlePlayerRemove(item.name)}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message='Não há pessoas nesse time' />
          )}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 },
          ]}
        />
      )}

      <Button
        type='secondary'
        title='Remover turma'
        onPress={handleGroupRemove}
      />
    </S.Container>
  );
};
