import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  NativeModules,
  View,
  Text,
  Button
} from 'react-native';

// module.exports = requireNativeComponent('RNTCommunication', null);

class Communication extends React.Component {
  static navigationOptions = {
    title: 'React Native 与 Native 通信'
  };

  render() {
    console.log('Communication.render + ' + this.props);
    return (
      <View style={styles.bg}>
        <Text style={styles.text}>{this.props.screenProps}</Text>
        <Button
          onPress={this._onPressButton}
          title="call native function"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"/>
      </View>
    );
  }

  _onPressButton() {
    var ViewController = NativeModules.ViewController;
    ViewController.onClickButton('data from js');
  }
}

// 样式
var styles = StyleSheet.create({
  bg: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#39B2FC',
    fontSize: 40
  }
});

export default Communication;