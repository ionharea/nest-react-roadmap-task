import React, { useEffect, useState } from 'react';
import { List, Pagination } from 'antd';
import { itemRender } from '../pages/utils';
import { Post } from '../types';
import { UserIDRouteParam } from '../pages/users-details';
import { getUserPosts } from '../services';
import { Link, useParams } from 'react-router-dom';

export const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [pageNumber, setPageNumber] = useState(0);

  const { userId } = useParams<UserIDRouteParam>();

  useEffect(() => {
    getUserPosts(userId, String(pageNumber)).then(posts => setPosts(posts));
  }, [userId, pageNumber]);

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
      <Pagination defaultCurrent={1} total={21} itemRender={itemRender} onChange={(page) => setPageNumber(page)} />
    </>
  );
};
