import AsyncStorage from '@react-native-async-storage/async-storage';

import { playerCollection } from 'storage/storageConfig';

import { AppError } from 'utils/AppError';

import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup';

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storagePlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storagePlayers.filter(
      player => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já está adicionada em um time aqui.');
    }

    await AsyncStorage.setItem(
      `${playerCollection}-${group}`,
      JSON.stringify([...storagePlayers, newPlayer])
    );
  } catch (error) {
    throw error;
  }
}
