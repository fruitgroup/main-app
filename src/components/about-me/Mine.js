import React, { Component } from 'react';
import { StyleSheet, Text, Image, View , ScrollView, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from '../login/Login';
import Register from '../login/register/Register'
import LostPassword from '../login/lostPassword/LostPassword'
import About from './About'
import ProfileListCell from './ProfileListCell'

class Mine extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  _onLogin= () => {
    const { navigate } = this.props.navigation;
    navigate('Login');
  }

  _onAbout= () => {
    const { navigate } = this.props.navigation;
    navigate('About');
  }

  render() {
    return (
        <View style={styles.container}>

          <HeadView aboutAction={this._onAbout} loginAction={this._onLogin}  />

          <View style={styles.bodyContainer}>
            <ProfileListCell image={require('../../../assets/icons/ic_left_addr.png')} title={"地址管理"} />
            <ProfileListCell image={require('../../../assets/icons/ic_left_order.png')} title={"我的订单"} />
            <ProfileListCell image={require('../../../assets/icons/ic_left_setting.png')} title={"设置"} />
          </View>

        </View>
    );
  }

}

const HeadView = ({ loginAction, aboutAction }) => {
  return (
    <View style={styles.header}>
      <Text  style={{color: 'white', fontSize: 16}}>我的</Text>
      <TouchableOpacity activeOpacity={0.75} style={styles.user} onPress={aboutAction}>
        <Image style={styles.userImage} source = {require('../../../assets/icons/ic_avatar.png')}/>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.75} style={styles.loginContainer} onPress={loginAction}>
      <Text  style={{color: 'white'}}>点击登录</Text>
      </TouchableOpacity>
    </View>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
loginContainer: {
  borderWidth: 1,
  borderColor: 'white',
  borderRadius: 2,
  paddingVertical: 5,
  paddingHorizontal: 20
},
  header: {
    height: 200,
    backgroundColor: '#1abc9c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bodyContainer: {
    height: 180,
    justifyContent: 'space-around'
  },
  userImage: {
    width: 90,
    height: 90,
    margin: 10
  },

  profile: {
    flex: 1,
    height: 40,
    backgroundColor: '#1abc9c'
  }

});

const MineTab = StackNavigator({
  Mine: {
    screen: Mine,
    path: "/mine",
    navigationOptions: {
      title: '我的',
      header: null
    }
  },
  Login: {
    screen: Login,
    path: "/login",
    navigationOptions: {
      title: '登录',
      tabBarVisible: false,
    }
  },
  About: {
    screen: About,
    path: "/about",
    navigationOptions: {
      title: '关于自己',
      tabBarVisible: false,
    }
  },
  LostPassword: {
    screen: LostPassword,
    path: "/lostPassword",
    navigationOptions: {
      title: '找回密码',
      tabBarVisible: false,
    }
  },
  Register: {
    screen: Register,
    path: "/register",
    navigationOptions: {
      title: '注册',
      tabBarVisible: false,
    }
  },
},
  {
    initialRouteName: 'Mine',
  }
);

export default MineTab;
