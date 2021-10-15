import React, { useContext, useEffect, useState } from 'react';
import { List, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import { itemRender } from './utils';
import { getUsers } from '../services';
import { UsersContext } from '../contexts/providers/users-context';
import { getNumOfItemsRequired } from '../contexts/utils';
import { getItemsFromContext } from '../contexts/utils/getItemsFromContext';
import { setContextItems } from '../contexts/utils/setContextItems';
import { DEF_PAGE } from '../services/constants';

export const UsersList = () => {
  const [pageNumber, setPageNumber] = useState(Number(DEF_PAGE));

  const { state: persistedUsers, setState } = useContext(UsersContext);

  const numOfItemsRequired = getNumOfItemsRequired(pageNumber);

  const users = getItemsFromContext(persistedUsers, pageNumber, numOfItemsRequired);

  useEffect(() => {
    if (users.length !== numOfItemsRequired) {
      getUsers(String(pageNumber)).then(users => setContextItems(users, setState));
    }
  }, [pageNumber]);

  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={users}
        renderItem={user => (
          <Link to={`/users/${user.id}`}>
            <List.Item>
              <List.Item.Meta
                title={user.name}
                description={user.address.city}
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
