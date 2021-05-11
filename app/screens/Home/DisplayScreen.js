import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const DisplayScreen = ({ route }) => {
  const image = route.params.uri;
  console.log(image);
  return (
    <ImageBackground
      source={image}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DisplayScreen;
