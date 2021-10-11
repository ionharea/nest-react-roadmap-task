import React, { useEffect, useState } from 'react';
import { User } from '../../../../roadmap-task-api/src/types/user';
import { getUsers } from '../../services/users';
import { Pagination } from 'antd';
import { List } from 'antd';


export const UsersList = () => {
  const [users, setUsers] = useState([] as unknown as User[]);

  useEffect(() => {
    getUsers().then(users => setUsers(users));
  }, []);

  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={users}
        renderItem={user => (
          <List.Item>
            <List.Item.Meta
              title={user.name}
              description={`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
            />
          </List.Item>
        )}
      />
      <br/>
      <Pagination defaultCurrent={1} total={50} />
    </>
  );
};
