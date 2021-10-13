import { Route, Switch } from 'react-router-dom';
import { PostDetails, UserDetails, UsersList } from '../pages';

export const RouterConfig = () => {
  return (
    <Switch>
      <Route path='/users' component={UsersList} exact />
      <Route path='/users/:userId' component={UserDetails} exact />
      <Route path='/users/:userId/posts/:postId' component={PostDetails} exact />
    </Switch>
  );
};
