import React from 'react';
import { List } from 'antd';
import { Link, Route } from 'react-router-dom';
import { RouterConfig } from './routes/router-config';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Route path='/' exact>
          <List
            itemLayout='horizontal'
            dataSource={['Users']}
            renderItem={item => (
              <Link to={`/users`}>
                <List.Item>
                  <List.Item.Meta
                    title={item}
                  />
                </List.Item>
              </Link>
            )}
          />
        </ Route>
        <RouterConfig />
      </header>
    </div>
  );
}

export default App;
