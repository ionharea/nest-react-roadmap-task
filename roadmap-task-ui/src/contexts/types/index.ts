import React from 'react';

export type ContextStateType<T> = {
  pageId?: number, identifierId?: number, items: T[]
}

export type ContextType<T> = {
  state: ContextStateType<T>[],
  setState: React.Dispatch<React.SetStateAction<ContextStateType<T>[]>>
}
