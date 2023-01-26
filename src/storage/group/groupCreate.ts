import AsyncStorage from '@react-native-async-storage/async-storage';

import { groupCollection } from 'storage/storageConfig';
import { groupsGetAll } from './groupsGetAll';

export async function groupCreate(newGroup: string) {
  try {
    const storageGroups = await groupsGetAll();

    await AsyncStorage.setItem(
      groupCollection,
      JSON.stringify([...storageGroups, newGroup])
    );
  } catch (error) {
    throw error;
  }
}
