import React from 'react';

export type ContextType<T> = {
  state: T[],
  setState: React.Dispatch<React.SetStateAction<T[]>>
}
