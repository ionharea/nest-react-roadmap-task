import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/users';
import { List, Pagination } from 'antd';
import { User } from '../../types';
import { Link } from 'react-router-dom';

export const UsersList = () => {
  const [users, setUsers] = useState([] as User[]);

  useEffect(() => {
    getUsers().then(users => setUsers(users));
  }, []);

  const updateUsers = (page: number) => {
    getUsers(String(page)).then(users => setUsers(users));
  };

  const itemRender = (current: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', originalElement: React.ReactElement<HTMLElement>) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };

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
      <br />
      <Pagination defaultCurrent={1} total={50} itemRender={itemRender} onChange={(page) => updateUsers(page)} />
    </>
  );
};
