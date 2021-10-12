import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import { useParams } from 'react-router-dom';
import { getPost } from '../../services/posts';
import { Post } from '../../types';

interface IPostIDRouteParam {
  postId: string;
}

export const PostDetails = () => {
  const [post, setPost] = useState({} as Post);
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
    </>
  );
};
