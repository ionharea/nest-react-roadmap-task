import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import { useParams } from 'react-router-dom';
import { Post } from '../types';
import { getPost } from '../services';
import { PostComments } from '../components/post-comments';

export interface IPostIDRouteParam {
  postId: string;
}

export const PostDetails = () => {
  const [post, setPost] = useState<Post>({} as any);
  const { postId } = useParams<IPostIDRouteParam>();

  useEffect(() => {
    getPost(postId).then(post => setPost(post));
  }, [postId]);

  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={Object.entries(post).length === 0 ? [] : [post]}
        renderItem={post => (
          <List.Item>
            <List.Item.Meta
              title={post.title}
              description={post.body}
            />
          </List.Item>
        )}
      />
      <br/>
      <br/>
      <PostComments />
    </>
  );
};
