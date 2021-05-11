import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppScreens} from './Screens';
import DisplayScreen from '../screens/Home/DisplayScreen';
import HomeTabs from './HomeTabs';
import BackButton, {styles} from '../components/BackButton';
import colors from '../config/colors';

const displayScreenOptions = {
  headerLeft: null,
  headerRight: BackButton('close', colors.white),
  headerRightContainerStyle: styles.headerRightContainer,
  headerTransparent: true,
  title: null,
};

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={AppScreens.Home}
      component={HomeTabs}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={AppScreens.Display}
      component={DisplayScreen}
      options={displayScreenOptions}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
