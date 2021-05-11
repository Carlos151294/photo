import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import colors from '../config/colors';

const AppTextInput = ({width, ...otherProps}) => {
  return (
    <TextInput
      style={[{width}, styles.text]}
      {...otherProps}
      placeholderTextColor={colors.medium}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    height: 52,
    marginVertical: 12,
    paddingHorizontal: 17,
    borderWidth: 2,
  },
});

export default AppTextInput;
