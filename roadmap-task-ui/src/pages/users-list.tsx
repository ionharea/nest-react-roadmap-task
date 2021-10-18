import React, { useContext, useEffect, useState } from 'react';
import { List, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import { itemRender } from './utils';
import { getUsers } from '../services';
import { UsersContext } from '../contexts/providers/users-context';
import { DEF_PAGE } from '../services/constants';
import { getItemsFromContext, saveItemsToContext } from '../contexts/utils';

export const UsersList = () => {
  const { state, setState } = useContext(UsersContext);

  const [pageNumber, setPageNumber] = useState(Number(DEF_PAGE));

  const users = getItemsFromContext({ state, pageId: pageNumber });

  useEffect(() => {
    if (!users.length) {
      getUsers(String(pageNumber)).then(users => saveItemsToContext({ items: users, pageId: pageNumber }, setState));
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
