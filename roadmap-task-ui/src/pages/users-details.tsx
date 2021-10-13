import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import { useParams } from 'react-router-dom';
import { User } from '../../../roadmap-task-api/src/types/user';
import { PostsList } from '../components/posts-list';
import { getUser } from '../services';

export type UserIDRouteParam = {
  userId: string;
}

export const UserDetails = () => {
  const [user, setUser] = useState({} as User);
  const { userId } = useParams<UserIDRouteParam>();

  useEffect(() => {
    getUser(userId).then(user => setUser(user));
  }, [userId]);

  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={Object.entries(user).length === 0 ? [] : [user]}
        renderItem={user => (
          <List.Item>
            <List.Item.Meta
              title={`${user.name} ${user.username}`}
              description={`${user.address?.street}, ${user.address.suite}, ${user.address.city}`}
            />
          </List.Item>
        )}
      />
      <br/>
      <br/>
      <PostsList />
    </>

  );
};
