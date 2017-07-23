import React, { Component } from 'react'
import { StyleSheet, Text, Image, View } from 'react-native';


export default class Follower extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Text> 关注 </Text>
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
