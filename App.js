import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import AuthContext from './app/context/auth';
import { useState } from 'react';
import { View } from 'react-native';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {!user ? <AuthNavigator /> : <AppNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
