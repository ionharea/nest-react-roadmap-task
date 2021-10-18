import React, { useState } from 'react';
import { Post } from '../../types';
import { ContextStateType, ContextType } from '../types';

export const PostsContext = React.createContext<ContextType<Post>>
({
  state: [], setState: () => {
  },
});

export const PostsProvider = (props: any) => {
  const [state, setState] = useState<ContextStateType<Post>[]>([]);

  return (
    <PostsContext.Provider value={{ state, setState }}>
      {props.children}
    </PostsContext.Provider>
  );
};
