import 'react-native-gesture-handler';
import React from 'react';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  useFonts,
} from '@expo-google-fonts/poppins';
import { StatusBar, View } from 'react-native';

import theme from './src/theme';
import Routes from './src/routes';
import Provider from './src/hooks';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium
  });

  if(!fontsLoaded) return <View />

  return (
    <Provider>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <Routes />
    </Provider>
  );
}

export default App;
