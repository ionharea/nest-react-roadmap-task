import React, { useState } from 'react';
import { ContextStateType, ContextType } from '../types';

export const CommentsContext = React.createContext<ContextType<Comment>>
({
  state: [], setState: () => {
  },
});

export const CommentsProvider = (props: any) => {
  const [state, setState] = useState<ContextStateType<Comment>[]>([]);

  return (
    <CommentsContext.Provider value={{ state, setState }}>
      {props.children}
    </CommentsContext.Provider>
  );
};
