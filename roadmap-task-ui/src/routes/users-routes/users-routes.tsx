import { Route, Switch } from 'react-router-dom';
import { UsersList } from '../../pages/users-list';
import { UserDetails } from '../../pages/user-details';

export const UsersRouter = () => {
  return (
    <Switch>
      <Route path='/users/:userId' component={UserDetails} />
      <Route path='/users' component={UsersList} />
    </Switch>
  );
};
