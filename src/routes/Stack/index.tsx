import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import Home from '../../screns/Home';
import Login from '../../screns/Login';
import Register from '../../screns/Register';
import Model from '../../screns/Model';
import Price from '../../screns/Price';

const { Navigator, Screen } = createNativeStackNavigator();

type StackNavigation = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Logged: undefined;
  Model: undefined;
  Price: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const Stack = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Model" component={Model} />
      <Screen name="Price" component={Price} />
    </Navigator>
  );
};

export default Stack;
