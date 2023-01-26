import AsyncStorage from '@react-native-async-storage/async-storage';

import { playerCollection } from 'storage/storageConfig';

import { PlayerStorageDTO } from './PlayerStorageDTO';

export async function playersGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${playerCollection}-${group}`);

    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
}
