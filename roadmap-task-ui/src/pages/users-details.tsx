import React, { useContext, useEffect } from 'react';
import { List } from 'antd';
import { useParams } from 'react-router-dom';
import { PostsList } from '../components/posts-list';
import { getUser } from '../services';
import { UsersContext } from '../contexts/providers/users-context';
import { getItemFromContext } from '../contexts/utils/getItemFromContext';
import { setContextItems } from '../contexts/utils/setContextItems';

export type UserIDRouteParam = {
  userId: string;
}

export const UserDetails = () => {
  const { userId } = useParams<UserIDRouteParam>();

  const { state: persistedUsers, setState } = useContext(UsersContext);

  const user = getItemFromContext(persistedUsers, Number(userId));

  useEffect(() => {
    if (!user) {
      getUser(userId).then(user => setContextItems([user], setState));
    }
  }, [userId]);

  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={!user ? [] : [user]}
        renderItem={user => (
          <List.Item>
            <List.Item.Meta
              title={`${user.name} ${user.username}`}
              description={`${user.address?.street}, ${user.address.suite}, ${user.address.city}`}
            />
          </List.Item>
        )}
      />
      <br />
      <br />
      <PostsList />
    </>
  );
};
