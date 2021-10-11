import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/users';
import { List, Pagination } from 'antd';
import { User } from '../../types';
import { Link } from 'react-router-dom';

export const UsersList = () => {
  const [users, setUsers] = useState([] as User[]);

  const updateUsers =  (page: number) => {
    getUsers(String(page)).then(users => setUsers(users));
  }

  useEffect(() => {
    getUsers().then(users => setUsers(users));
  }, []);

  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={users}
        renderItem={user => (
          <Link to={`/users/${user.id}`}>
            <List.Item>
              <List.Item.Meta
                title={user.name}
                description={user.address.city}
              />
            </List.Item>
          </Link>
        )}
      />
      <br/>
      <Pagination defaultCurrent={1} total={50} onChange={(page) => updateUsers(page) } />
    </>
  );
};
