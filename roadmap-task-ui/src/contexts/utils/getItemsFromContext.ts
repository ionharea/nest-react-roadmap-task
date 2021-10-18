import { Post, User } from '../../types';
import { ContextStateType } from '../types';

type Props<T> = {
  state: ContextStateType<T>[],
  pageId?: number,
  itemId?: number,
  identifierId?: number
}

export const getItemsFromContext = <T extends User | Post>(props: Props<T>): T[] => {
  const { state, pageId, itemId, identifierId } = props;

  if (!pageId && itemId) return state.map(({ items }) => items).flat().filter(item => item.id === itemId);

  return state.filter(stateItem => stateItem.pageId === pageId && stateItem.identifierId === identifierId).map(stateItem => stateItem.items).flat();
};
