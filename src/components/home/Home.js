import React, { Component } from 'react'
import { StyleSheet, Text, Image, View } from 'react-native';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Text> 首页 </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1abc9c'
  },

});
