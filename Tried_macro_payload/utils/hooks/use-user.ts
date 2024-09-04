import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Users from './Users.query.graphql';

export type IUser = {};

export const useUser = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const { data: queryData } = useQuery(Users);

  useEffect(() => {
    console.log('users data from query : ', queryData);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []); // Added empty dependency array to avoid unnecessary re-fetching

  console.log('users>>>>>', users);

  return {
    users
  };
};
