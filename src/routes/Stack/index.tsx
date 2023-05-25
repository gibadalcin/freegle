import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import Splash from '../../pages/Splash';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Model from '../../pages/Model';
import Price from '../../pages/Price';
import Saved from '../../pages/Saved';
import React from 'react';
import Register from '../../pages/Register';

const { Navigator, Screen } = createNativeStackNavigator();

type StackNavigation = {
  Splash: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Logged: undefined;
  Model: undefined;
  Price: undefined;
  Saved: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const Stack = () => {
  return (
    <Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Screen name="Splash" component={Splash} />
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Model" component={Model} />
      <Screen name="Price" component={Price} />
      <Screen name="Saved" component={Saved} />
    </Navigator>
  );
};

export default Stack;
