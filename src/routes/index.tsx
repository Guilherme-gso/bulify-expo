import React from 'react';
import { Text } from 'react-native';

import SessionRouter from './session.routes';
import AppRouter from './app.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { loading, user } = useAuth();

  if(loading) {
    return <Text>Carregando...</Text>
  }

  return user ? <AppRouter /> : <SessionRouter />
}

export default Routes;
