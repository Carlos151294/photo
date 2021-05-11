import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {AppScreens} from './Screens';
import BackButton, { styles } from '../components/BackButton';

const Stack = createStackNavigator();

const defaultOptions = {
  headerLeft: BackButton('back'),
  headerLeftContainerStyle: styles.headerLeftContainer,
  headerTransparent: true,
  title: null,
};

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={AppScreens.Welcome}
      component={WelcomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={AppScreens.Login}
      component={LoginScreen}
      options={defaultOptions}
    />
    <Stack.Screen
      name={AppScreens.Register}
      component={RegisterScreen}
      options={defaultOptions}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
