import React from 'react';
import {AppRegistry, StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';

class ReactNativeElementsIndex extends React.Component {
    static navigationOptions = {
        title: 'React Native Elements'
    };

    render() {
        return (
            <View style={styles.bg}>
                <Button
  raised
  icon={{name: 'home', size: 32}}
  buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
  textStyle={{textAlign: 'center'}}
  title={`Welcome to\nReact Native Elements`} />
            </View>
        );
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

export default ReactNativeElementsIndex;