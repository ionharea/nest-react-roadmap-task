import { Route } from 'react-router-dom';
import { PostDetails } from '../../pages/post-details';

export const PostsRouter = () => {
  return (
    <Route path='/users/:userId/posts/:postId' component={PostDetails} />
  );
};
