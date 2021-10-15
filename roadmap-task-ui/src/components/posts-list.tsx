import React, { useContext, useEffect, useState } from 'react';
import { List, Pagination } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { itemRender } from '../pages/utils';
import { UserIDRouteParam } from '../pages/users-details';
import { getUserPosts } from '../services';
import { getNumOfItemsRequired } from '../contexts/utils';
import { getItemsFromContext } from '../contexts/utils/getItemsFromContext';
import { DEF_PAGE } from '../services/constants';
import { setContextItems } from '../contexts/utils/setContextItems';
import { PostsContext } from '../contexts/providers/posts-context';

export const PostsList = () => {
  const [pageNumber, setPageNumber] = useState(Number(DEF_PAGE));

  const { userId } = useParams<UserIDRouteParam>();

  const { state: persistedPosts, setState } = useContext(PostsContext);

  const numOfItemsRequired = getNumOfItemsRequired(pageNumber);

  const posts = getItemsFromContext(persistedPosts, pageNumber, numOfItemsRequired);

  useEffect(() => {
    if (posts.length !== numOfItemsRequired) {
      getUserPosts(userId, String(pageNumber)).then(posts => setContextItems(posts, setState));
    }
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
