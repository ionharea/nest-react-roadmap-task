import React, { useContext, useEffect } from 'react';
import { List } from 'antd';
import { useParams } from 'react-router-dom';
import { getPost } from '../services';
import { PostComments } from '../components/post-comments';
import { PostsContext } from '../contexts/providers/posts-context';
import { getItemsFromContext, saveItemsToContext } from '../contexts/utils';

export type IPostIDRouteParam = {
  postId: string;
}

export const PostDetails = () => {
  const { state, setState } = useContext(PostsContext);

  const { postId } = useParams<IPostIDRouteParam>();

  const posts = getItemsFromContext({ state, itemId: Number(postId) });

  useEffect(() => {
    if (!posts.length) {
      getPost(postId).then(post => saveItemsToContext({ items: [post] }, setState));
    }
  }, [postId]);

  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={posts}
        renderItem={post => (
          <List.Item>
            <List.Item.Meta
              title={post.title}
              description={post.body}
            />
          </List.Item>
        )}
      />
      <br />
      <br />
      <PostComments />
    </>
  );
};
