import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  return <Icon name="back" size={22} onPress={() => navigation.goBack()} />;
};

export const styles = StyleSheet.create({
  headerLeftContainer: {
    paddingLeft: 15,
  },
});

export default BackButton;