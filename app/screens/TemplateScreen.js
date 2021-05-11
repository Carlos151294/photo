import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../config/colors';

const TemplateScreen = ({ route }) => {
  const {name} = route;

  return (
    <View style={styles.container}>
      <View style={styles.safearea}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: colors.white,
  },
  safearea: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 15,
    paddingBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    fontFamily: 'Comfortaa-Light',
    fontWeight: '400',
  },
});

export default TemplateScreen;
