import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {AppScreens} from './Screens';
import TemplateScreen from '../screens/TemplateScreen';
import NewDesignButton from '../components/NewDesignButton';
import HomeNavigator from './AppNavigator';
import HomeScreen from '../screens/Home/HomeScreen';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name={AppScreens.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={22} />,
        }}
      />
      <Tab.Screen
        name={AppScreens.Search}
        component={TemplateScreen}
        options={{
          tabBarIcon: () => <Icon name="search1" size={22} />,
        }}
      />
      <Tab.Screen
        name={AppScreens.NewDesign}
        component={TemplateScreen}
        options={({navigation}) => ({
          tabBarButton: () => (
            <NewDesignButton
              onPress={() => navigation.navigate(AppScreens.NewDesign)}
            />
          ),
        })}
      />
      <Tab.Screen
        name={AppScreens.Messages}
        component={TemplateScreen}
        options={{
          tabBarIcon: () => <FeatherIcon name="message-circle" size={22} />,
        }}
      />
      <Tab.Screen
        name={AppScreens.Profile}
        component={TemplateScreen}
        options={{
          tabBarIcon: () => <IonIcon name="person-outline" size={22} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
