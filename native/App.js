import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainStack from './src/Navigation/MainStack';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
      <MainStack />
  );
};

export default App;
