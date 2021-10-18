import React, { useContext, useEffect, useState } from 'react';
import { List, Pagination } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { itemRender } from '../pages/utils';
import { UserIDRouteParam } from '../pages/users-details';
import { getUserPosts } from '../services';
import { DEF_PAGE } from '../services/constants';
import { PostsContext } from '../contexts/providers/posts-context';
import { getItemsFromContext, saveItemsToContext } from '../contexts/utils';

export const PostsList = () => {
  const { state, setState } = useContext(PostsContext);
  const [pageNumber, setPageNumber] = useState(Number(DEF_PAGE));

  const { userId } = useParams<UserIDRouteParam>();

  const posts = getItemsFromContext({ state, pageId: pageNumber, identifierId: Number(userId) });

  useEffect(() => {
    if (!posts.length) {
      getUserPosts(userId, String(pageNumber)).then(posts => saveItemsToContext({
          items: posts,
          pageId: pageNumber,
          identifierId: Number(userId),
        }, setState),
      );
    }
  }, [pageNumber]);

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
