import React, { useState } from 'react';
import { User } from '../../types';
import { ContextStateType, ContextType } from '../types';

export const UsersContext = React.createContext<ContextType<User>>
({
  state: [], setState: () => {
  },
});

export const UsersProvider = (props: any) => {
  const [state, setState] = useState<ContextStateType<User>[]>([]);

  return (
    <UsersContext.Provider value={{ state, setState }}>
      {props.children}
    </UsersContext.Provider>
  );
};
