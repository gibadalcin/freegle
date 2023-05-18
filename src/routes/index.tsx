import { NavigationContainer } from '@react-navigation/native';
import Stack from './Stack';
import 'react-native-gesture-handler';
import React from 'react';

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default Routes;
