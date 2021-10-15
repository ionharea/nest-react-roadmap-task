import React, { useEffect, useState } from 'react';
import { List, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import { User } from '../types';
import { itemRender } from './utils';
import { getUsers } from '../services';

export const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getUsers(String(pageNumber)).then(users => setUsers(users));
  }, [pageNumber]);

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
      <Pagination defaultCurrent={1} total={21} itemRender={itemRender} onChange={(page) => setPageNumber(page)} />
    </>
  );
};
