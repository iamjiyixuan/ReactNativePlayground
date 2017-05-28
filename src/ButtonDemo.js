import React from 'react';
import {AppRegistry, StyleSheet, View, Text} from 'react-native';

class ButtonDemo extends React.Component {
    static navigationOptions = {
        title: 'ButtonDemo'
    };

    render() {
        return (
            <View style={styles.bg}>
                <Text style={styles.text}>Button Demo</Text>
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

export default ButtonDemo;