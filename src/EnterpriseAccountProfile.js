import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Switch,
  TouchableOpacity
} from 'react-native';

class EnterpriseAccountProfile extends React.Component {

  static navigationOptions = {
    title: 'EnterpriseAccount Profile'
  };

  constructor(props) {
    super(props);
    this.state = {
      isStar: true
    };
  }

  render() {
    return (
      <ScrollView style={styles.bg}>
        <View style={styles.profile}>
          <Image
            style={styles.avatar}
            source={{
            uri: 'https://avatars2.githubusercontent.com/u/6269028?v=3&s=460'
          }}/>
          <View style={styles.profileDetail}>
            <Text style={styles.name}>神计信息</Text>
            <Text style={styles.account}>123456</Text>
          </View>
        </View>
        <View style={styles.setStar}>
          <Text
            style={{
            color: "#3F3F3F",
            marginLeft: 10
          }}>设置星标朋友</Text>
          <Switch
            style={{
            marginRight: 10
          }}
            onValueChange={(value) => this.setState({isStar: value})}
            value={this.state.isStar}></Switch>
        </View>
        <TouchableOpacity style={[styles.button, styles.sendButton]}>
          <Text
            style={{
            color: 'white',
            fontSize: 17
          }}>发消息</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.exitButton]}>
          <Text
            style={{
            color: 'white',
            fontSize: 17
          }}>退出企业号</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

// 样式
var styles = StyleSheet.create({
  bg: {
    backgroundColor: '#F3F3F3',
    flex: 1,
    flexDirection: 'column'
  },
  button: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5
  },
  sendButton: {
    backgroundColor: '#4DAD43'
  },
  exitButton: {
    backgroundColor: '#ED4C40'
  },
  profile: {
    height: 70,
    marginTop: 25,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  profileDetail: {
    flexDirection: 'column',
    marginTop: 10
  },
  avatar: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 25
  },
  name: {
    color: "black",
    fontFamily: 'Heiti SC'
  },
  account: {
    marginTop: 5,
    color: "#B1B1B1",
    fontFamily: 'Heiti SC'
  },
  setStar: {
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  }
});

AppRegistry.registerComponent('EnterpriseAccountProfile', () => EnterpriseAccountProfile);
export default EnterpriseAccountProfile;