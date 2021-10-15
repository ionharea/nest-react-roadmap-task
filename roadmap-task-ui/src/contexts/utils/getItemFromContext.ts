import { Post, User } from '../../types';

export const getItemFromContext = <T extends User | Post>(persistedItems: T[], searchingItemID: number): T | undefined => {
  if (persistedItems.length > 0) {
    return persistedItems.find(item => item.id === searchingItemID)
  }
  return undefined;
};
