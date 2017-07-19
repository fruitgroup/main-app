import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username or Email"
          style={styles.input}
          />
        <TextInput
          placeholder="Password"
          style={styles.input}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  }
});
