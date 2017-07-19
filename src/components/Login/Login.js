import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

import LoginForm from './LoginForm'
export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Login View</Text>
          {/* add image later with tag*/}
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c'
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    opacity: 0.9
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    marginBottom: 40,
  }
});
