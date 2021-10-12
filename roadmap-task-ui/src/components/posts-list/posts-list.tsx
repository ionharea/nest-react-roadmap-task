import React, { useEffect, useState } from 'react';
import { List, Pagination } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { itemRender } from '../../pages/utils';
import { Post } from '../../types';
import { IUserIDRouteParam } from '../../pages/user-details/users-details';
import { getUserPosts } from '../../services/posts';

export const PostsList = () => {
  const [posts, setPosts] = useState([] as Post[]);
  const { userId } = useParams<IUserIDRouteParam>();

  useEffect(() => {
    getUserPosts(userId).then(posts => setPosts(posts));
  }, []);

  const updatePosts = (page: number) => {
    getUserPosts(userId, String(page)).then(posts => setPosts(posts));
  };

  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={posts}
        renderItem={post => (
          <Link to={`/users/${userId}/posts/${post.id}`}>
            <List.Item>
              <List.Item.Meta
                title={post.title}
              />
            </List.Item>
          </Link>
        )}
      />
      <br />
      <Pagination defaultCurrent={1} total={50} itemRender={itemRender} onChange={(page) => updatePosts(page)} />
    </>
  );
};
