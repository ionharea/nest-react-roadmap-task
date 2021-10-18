import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import { useParams } from 'react-router-dom';
import { Comment } from '../types';
import { getPostComments } from '../services';
import { IPostIDRouteParam } from '../pages/post-details';

export const PostComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const { postId } = useParams<IPostIDRouteParam>();

  useEffect(() => {
    getPostComments(postId).then(postComments => setComments(postComments));
  }, [postId]);

  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={comments}
        renderItem={comment => (
          <List.Item>
            <List.Item.Meta
              title={comment.name}
              description={comment.body}
            />
          </List.Item>
        )}
      />
    </>
  );
};
