import React from 'react';
import {StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Username or Email" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} returnKeyType="next" style={styles.input} onSubmitEditing={() => this.passwordInput.focus()}/>
        <TextInput placeholder="Password" returnKeyType="go" style={styles.input} ref={(input) => this.passwordInput = input} secureTextEntry/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Lost Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.quickButtonWeChat}>
            <Text style={styles.buttonText}>WeChat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickButtonQQ}>
            <Text style={styles.buttonText}>QQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickButtonAlipay}>
            <Text style={styles.buttonText}>Alipay</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  input: {
    width: 250,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#000',
    paddingHorizontal: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button:{
    backgroundColor: '#16a085',
    width: 120,
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
 quickButtonWeChat: {
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 64,
  },
   quickButtonQQ: {
    backgroundColor: '#2980B9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 64,
  }, 
  quickButtonAlipay: {
    backgroundColor: '#3498DB',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 64,
  }
});
