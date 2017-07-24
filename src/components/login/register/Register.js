import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';

export default class Register extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput placeholder="手机号" keyboardType="phone-pad"  autoCorrect={false} returnKeyType="next" style={styles.input} onSubmitEditing={() => this.phoneCodeInput.focus()}/>
        <TextInput placeholder="验证码" keyboardType="numeric"  autoCorrect={false} returnKeyType="done" style={styles.input} ref={(input) => this.phoneCodeInput = input}/>
        <TextInput placeholder="密码" returnKeyType="next" style={styles.input} onSubmitEditing={() => this.passwordInput.focus()} secureTextEntry/>
        <TextInput placeholder="再次确认密码" returnKeyType="go" style={styles.input} ref={(input) => this.passwordInput = input} secureTextEntry/>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container:{

  },
  input: {
    
  }
});
