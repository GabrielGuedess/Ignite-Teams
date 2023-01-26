import AsyncStorage from '@react-native-async-storage/async-storage';

import { groupCollection } from 'storage/storageConfig';

import { AppError } from 'utils/AppError';

import { groupsGetAll } from './groupsGetAll';

export async function groupCreate(newGroup: string) {
  try {
    const storageGroups = await groupsGetAll();

    const groupAlreadyExists = storageGroups.includes(newGroup);

    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.');
    }

    await AsyncStorage.setItem(
      groupCollection,
      JSON.stringify([...storageGroups, newGroup])
    );
  } catch (error) {
    throw error;
  }
}
