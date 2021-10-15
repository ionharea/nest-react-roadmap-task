import React from 'react';
import { Post, User } from '../../types';

export const setContextItems = <T extends Post | User>(items: T[], setState: React.Dispatch<React.SetStateAction<T[]>>) => {
  setState(persistedItems => {

    const idsOfPersistedItems = persistedItems.map(post => post.id);

    const filteredItems = items.filter(item => !idsOfPersistedItems.includes(item.id));

    return [...persistedItems, ...filteredItems];
  });
};
