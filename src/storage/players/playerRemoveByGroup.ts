import AsyncStorage from '@react-native-async-storage/async-storage';

import { playerCollection } from 'storage/storageConfig';

import { playersGetByGroup } from './playersGetByGroup';

export async function playerRemoveByGroup(playName: string, group: string) {
  try {
    const storage = await playersGetByGroup(group);

    const players = storage.filter(player => player.name !== playName);

    await AsyncStorage.setItem(
      `${playerCollection}-${group}`,
      JSON.stringify(players)
    );
  } catch (error) {
    throw error;
  }
}
