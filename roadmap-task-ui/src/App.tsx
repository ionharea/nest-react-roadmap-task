import React from 'react';
import { UsersRouter } from './routes/users-routes/users-routes';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
          <UsersRouter />
      </header>
    </div>
  );
}

export default App;
