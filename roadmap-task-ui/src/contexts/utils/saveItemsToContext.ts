import React from 'react';
import { Post, User } from '../../types';
import { ContextStateType } from '../types';

export const saveItemsToContext = <T extends Post | User>(newState: ContextStateType<T>, setState: React.Dispatch<React.SetStateAction<ContextStateType<T>[]>>) => setState(prevState => [...prevState, newState]);
