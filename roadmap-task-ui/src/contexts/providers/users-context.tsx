import React, { useState } from 'react';
import { User } from '../../types';
import { ContextType } from '../types';

export const UsersContext = React.createContext<ContextType<User>>
({
  state: [], setState: () => {
  },
});

export const UsersProvider = (props: any) => {
  const [state, setState] = useState<User[]>([]);

  return (
    <UsersContext.Provider value={{ state, setState }}>
      {props.children}
    </UsersContext.Provider>
  );
};
