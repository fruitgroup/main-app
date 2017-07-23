
import React, { Component } from 'react';

import { StyleSheet, Text, Image, View } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Home from '../home/Home';
import Follower from '../follower/Follower'
import Cart from '../shopping-cart/Cart'
import Mine from '../about-me/Mine'

export default class PageNavigator extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'home'
        }

    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    selectedTitleStyle={styles.selectedTitle}
                    renderIcon={() => <View style={styles.tabImage} />}
                    renderSelectedIcon={() => <View style={styles.tabImagePressed} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home />
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'follower'}
                    title="+关注"
                    selectedTitleStyle={styles.selectedTitle}
                    renderIcon={() => <View style={styles.tabImage} />}
                    renderSelectedIcon={() => <View style={styles.tabImagePressed} />}
                    onPress={() => this.setState({ selectedTab: 'follower' })}>
                    <Follower />
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'cart'}
                    title="购物车"
                    selectedTitleStyle={styles.selectedTitle}
                    renderIcon={() => <View style={styles.tabImage} />}
                    renderSelectedIcon={() => <View style={styles.tabImagePressed} />}
                    onPress={() => this.setState({ selectedTab: 'cart' })}>
                    <Cart />
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="我的"
                    selectedTitleStyle={styles.selectedTitle}
                    renderIcon={() => <View style={styles.tabImage} />}
                    renderSelectedIcon={() => <View style={styles.tabImagePressed} />}
                    onPress={() => this.setState({ selectedTab: 'mine' })}>
                    <Mine />
                </TabNavigator.Item>

            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tabImage: {
        width: 30,
        height: 30,
        backgroundColor: 'gray'
    },

    tabImagePressed: {
        width: 30,
        height: 30,
        backgroundColor: '#1abc9c'
    },
    selectedTitle: {
        color:'#1abc9c' 
    }
});