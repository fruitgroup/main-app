import React, { Component } from 'react'
import { StyleSheet, Text, Image, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Home from '../home/Home';
import Follower from '../follower/Follower'
import Cart from '../shopping-cart/Cart'
import MineTab from '../about-me/Mine'

const Tabs = TabNavigator(
    {
        Home: {
            screen: Home,
            path: '',
            navigationOptions: {
                title: 'Welcome',
                tabBarLabel: '首页',
                tabBarIcon: ({ tintColor,focused }) => {
                    <Image style={[styles.icon, { tintColor: tintColor }]} source={require('../../../assets/icons/app.png')} />
                },
            }
        },
        Follower: {
            screen: Follower,
            path: 'follower',
            navigationOptions: {
                tabBarLabel: '+关注',
                tabBarIcon: ({ tintColor, focused }) => {
                    <Image style={[styles.icon, { tintColor: tintColor }]} source={require('../../../assets/icons/app.png')} />
                }
            }
        },

        Cart: {
            screen: Cart,
            path: 'cart',
            navigationOptions: {
                tabBarLabel: '购物车',
                tabBarIcon: ({ tintColor, focused }) => {
                    <Image style={[styles.icon, { tintColor: tintColor }]} source={require('../../../assets/icons/app.png')} />
                }
            }
        },
        Mine: {
            screen: MineTab,
            path: 'mine',
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({ tintColor, focused }) => {
                    <Image style={[styles.icon, { tintColor: tintColor }]} source={require('../../../assets/icons/app.png')} />
                }
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: '#1abc9c',
        },
    }
);

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        backgroundColor: 'red'
    },
});
export default Tabs;