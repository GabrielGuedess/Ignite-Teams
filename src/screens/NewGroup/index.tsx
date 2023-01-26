import { useState } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Input } from 'components/Input';
import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { Highlight } from 'components/Highlight';

import { groupCreate } from 'storage/group/groupCreate';

import { AppError } from 'utils/AppError';

import * as S from './styles';

export const NewGroup = () => {
  const [group, setGroup] = useState('');

  const { navigate } = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma.');
      }

      await groupCreate(group.trim());
      navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
        console.error(error);
      }
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
