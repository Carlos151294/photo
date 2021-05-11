import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '../config/colors';

const NewDesignButton = ({ onPress }) => {
   return (
      <TouchableWithoutFeedback onPress={onPress}>
         <View style={styles.container}>
            <Icon name="plus" size={22} color={colors.white} />
         </View>
      </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      backgroundColor: '#FF00D6',
      height: 40,
      justifyContent: 'center',
      width: 80,
      borderRadius: 40,
      top: 7,
   }
});

export default NewDesignButton;