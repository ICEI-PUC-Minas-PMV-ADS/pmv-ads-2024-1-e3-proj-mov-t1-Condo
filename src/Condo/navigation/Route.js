import React from 'react';
import { useUser } from '../context/UserContext';
import { useCondomino } from '../context/CondominoContext';
import Auth from './Auth';
import Main from './Main';
import MainCondomino from './MainCondomino';

const Route = () => {
  const { signed } = useUser();
  const { signedCondomino } = useCondomino();

  if (signedCondomino) {
    return <MainCondomino />;
  }

  if (signed) {
    return <Main />;
  }

  return <Auth />;
};

export default Route;
