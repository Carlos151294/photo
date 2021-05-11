import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import colors from '../config/colors';

const BackButton =
  (title, color = colors.black) =>
  () => {
    const navigation = useNavigation();

    return (
      <Icon
        name={title}
        color={color}
        size={22}
        onPress={() => navigation.goBack()}
      />
    );
  };

export const styles = StyleSheet.create({
  headerLeftContainer: {
    paddingLeft: 15,
  },
  headerRightContainer: {
    paddingRight: 25,
  },
});

export default BackButton;
