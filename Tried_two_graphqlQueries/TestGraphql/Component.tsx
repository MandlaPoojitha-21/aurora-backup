import type { CustomComponentProps } from 'aurora/externalContext';
import React, { useEffect } from 'react';
import Users from './Users.query.graphql';
import MessageData from './messageQuery.query.graphql';

/**
 * This component is an example of a simple content slider using GlideJS
 */
const Component: React.FC<CustomComponentProps> = ({ auroraContext }) => {
  const { utils, components } = auroraContext;
  const { Loading } = components;
  const { useQuery } = utils;

  const { loading: usersLoading, error: usersError, data: usersData } = useQuery(Users);
  const { loading: BoardsLoading, error: BoardsError, data: MsgsData } = useQuery(MessageData);

  useEffect(() => {
    console.log('users data : ', usersData);
    console.log('Messages data : ', MsgsData);
  }, [usersLoading]);

  if (usersLoading) {
    return <Loading />;
  }
  if (usersError) {
    return `Error ${usersError.message}`;
  }

  return (
    <>
      <p>Testing two graphql queries in one component</p>
    </>
  );
};

export default Component;
