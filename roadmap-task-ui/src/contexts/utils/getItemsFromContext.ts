import { Post, User } from '../../types';
import { getLastItemIDOnPreviousPage } from './getLastItemIDOnPreviousPage';

export const getItemsFromContext = <T extends User | Post>(persistedItems: T[], actualPageNumber: number, numOfItemsRequired: number): T[] => {
  if (persistedItems.length > 0) {
    const lastUserIDOnPreviousPage = getLastItemIDOnPreviousPage(actualPageNumber);

    return persistedItems.filter(item => item.id > lastUserIDOnPreviousPage && item.id <= numOfItemsRequired);
  }
  return [];
};
