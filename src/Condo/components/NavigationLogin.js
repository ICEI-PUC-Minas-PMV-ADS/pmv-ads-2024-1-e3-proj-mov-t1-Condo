import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import LoginCondominio from '../pages/Login/LoginCondominio';
import LoginCondomino from '../pages/Login/LoginCondomino';

const LoginCondominioRoute = () => <LoginCondominio />;
const LoginCondominoRoute = () => <LoginCondomino />;

const NavigationLogin = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'LoginCondominio', title: 'Login Condominio', focusedIcon: 'home' },
    { key: 'LoginCondomino', title: 'Login Condômino', focusedIcon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    loginCondominio: LoginCondominioRoute,
    loginCondomino: LoginCondominoRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default NavigationLogin;
