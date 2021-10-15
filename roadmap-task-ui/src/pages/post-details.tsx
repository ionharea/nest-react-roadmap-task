import React, { useContext, useEffect } from 'react';
import { List } from 'antd';
import { useParams } from 'react-router-dom';
import { getPost } from '../services';
import { PostComments } from '../components/post-comments';
import { getItemFromContext } from '../contexts/utils/getItemFromContext';
import { PostsContext } from '../contexts/providers/posts-context';
import { setContextItems } from '../contexts/utils/setContextItems';

export type IPostIDRouteParam = {
  postId: string;
}

export const PostDetails = () => {
  const { postId } = useParams<IPostIDRouteParam>();

  const { state: persistedPosts, setState } = useContext(PostsContext);

  const post = getItemFromContext(persistedPosts, Number(postId));

  useEffect(() => {
    console.log(post);
    if (!post) {
      getPost(postId).then(post => {
          console.log(post);
          setContextItems([post], setState);
        },
      );
    }
  }, [postId]);

  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={!post ? [] : [post]}
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
