import AsyncStorage from '@react-native-async-storage/async-storage';

import { groupCollection, playerCollection } from 'storage/storageConfig';

import { groupsGetAll } from './groupsGetAll';

export async function groupRemoveByName(groupName: string) {
  try {
    const storageGroups = await groupsGetAll();

    const groups = storageGroups.filter(group => group !== groupName);

    await AsyncStorage.setItem(groupCollection, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${playerCollection}-${groupName}`);
  } catch (error) {
    throw error;
  }
}
