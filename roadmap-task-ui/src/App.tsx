import React from 'react';
import { UsersRouter } from './routes/users-routes/users-routes';
import { PostsRouter } from './routes/posts-routes/posts-routes';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <UsersRouter />
        <PostsRouter />
      </header>
    </div>
  );
}

export default App;
