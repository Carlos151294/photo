import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Button from '../components/Button';
import TextInput from '../components/Input';
import colors from '../config/colors';

const RegisterScreen = () => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.safearea}>
        <Text style={styles.header}>Register</Text>
        <TextInput
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        <Button title="Next" color="black" onPress={() => null} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: colors.white,
  },
  safearea: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 36,
    fontFamily: 'Comfortaa-Light',
    fontWeight: '400',
    marginBottom: 20,
  },
});

export default RegisterScreen;
