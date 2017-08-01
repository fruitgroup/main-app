import React from 'react';
import { StyleSheet, Text, Image, View, KeyboardAvoidingView } from 'react-native';

import LoginForm from './LoginForm'
export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.formContainer}>
          <LoginForm navigation={this.props.navigation}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffccc'
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    opacity: 0.9
  },
  formContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
