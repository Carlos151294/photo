import React from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';

import Button from '../components/Button';
import colors from '../config/colors';
import {AppScreens} from '../navigation/Screens';

const WelcomeScreen = ({navigation}) => (
  <React.Fragment>
    <ImageBackground
      source={require('../assets/welcome.png')}
      style={styles.backgroundContainer}>
      <Image source={require('../assets/logo.png')} />
    </ImageBackground>
    <View style={styles.actionsContainer}>
      <View style={styles.leftAction}>
        <Button
          title="Log in"
          onPress={() => navigation.navigate(AppScreens.Login)}
        />
      </View>
      <View style={styles.rightAction}>
        <Button
          title="Register"
          color="black"
          onPress={() => navigation.navigate(AppScreens.Register)}
        />
      </View>
    </View>
  </React.Fragment>
);

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  leftAction: {
    height: '100%',
    width: '50%',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 5,
  },
  rightAction: {
    height: '100%',
    width: '50%',
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 5,
  },
});

export default WelcomeScreen;
