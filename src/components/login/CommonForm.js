import React, { Component } from 'react';
import {StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation'

export default class CommonForm extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="手机号" keyboardType="phone-pad"  autoCorrect={false} returnKeyType="next" style={styles.input} onSubmitEditing={() => this.phoneCodeInput.focus()}/>
        <TextInput placeholder="验证码" keyboardType="numeric"  autoCorrect={false} returnKeyType="done" style={styles.input} ref={(input) => this.phoneCodeInput = input}/>
        <TextInput placeholder="密码" returnKeyType="next" style={styles.input} onSubmitEditing={() => this.passwordInput.focus()} secureTextEntry/>
        <TextInput placeholder="再次确认密码" returnKeyType="go" style={styles.input} ref={(input) => this.passwordInput = input} secureTextEntry/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  input: {
    width: 200,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
});
