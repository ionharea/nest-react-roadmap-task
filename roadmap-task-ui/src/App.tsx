import React from 'react';

import './App.css';
import { UsersList } from './pages/users-list';
import { UserDetails } from './pages/user-details';
import { PostDetails } from './pages/post-details';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <UsersList />
        <UserDetails />
        <PostDetails />
      </header>
    </div>
  );
}

export default App;
