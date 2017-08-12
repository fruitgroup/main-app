import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView} from 'react-native';

import CommonForm from '../CommonForm'
export default class LostPassword extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.formContainer}>
          <CommonForm />
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
  formContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
