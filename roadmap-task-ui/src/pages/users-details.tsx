import React, { useContext, useEffect } from 'react';
import { List } from 'antd';
import { useParams } from 'react-router-dom';
import { PostsList } from '../components/posts-list';
import { getUser } from '../services';
import { UsersContext } from '../contexts/providers/users-context';
import { getItemsFromContext, saveItemsToContext } from '../contexts/utils';

export type UserIDRouteParam = {
  userId: string;
}

export const UserDetails = () => {
  const { state, setState } = useContext(UsersContext);

  const { userId } = useParams<UserIDRouteParam>();

  const users = getItemsFromContext({ state, itemId: Number(userId) });

  useEffect(() => {
    if (!users.length) {
      getUser(userId).then(user => saveItemsToContext({ items: [user] }, setState));
    }
  }, [userId]);

  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={users}
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
