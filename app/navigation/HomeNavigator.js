import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { AppScreens } from './Screens';
import HomeScreen from '../screens/Home/HomeScreen';
import DisplayScreen from '../screens/Home/DisplayScreen';
import { defaultOptions } from './AuthNavigator';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={AppScreens.Home}
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={AppScreens.Display}
      component={DisplayScreen}
      options={defaultOptions}
    />
  </Stack.Navigator>
);

export default HomeNavigator;