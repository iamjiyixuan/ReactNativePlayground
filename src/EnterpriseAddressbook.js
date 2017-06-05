import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    NativeModules,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Button
} from 'react-native';

class EnterpriseAddressbook extends React.Component {
    static navigationOptions = {
        title: 'Enterprise Addressbook'
    };

    constructor(props) {
        super(props)
        this.state = {
            collapsed: {}
        }

        this._onPressProfile = this
            ._onPressProfile
            .bind(this);
    }

    render() {
        const data = require('./data.json');
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <Button title='Profile' onPress={this._onPressProfile}></Button>
                <View style={styles.tree}>
                    {this._getTree('root', data)}
                </View>
            </ScrollView>
        );
    }

    _onPressProfile() {
        console.log('_onPressProfile');
        const {navigate} = this.props.navigation;
        navigate('EnterpriseAccountProfile')
    }

    _getTree(type, data) {
        const nodes = [];
        for (const i = 0; i < data.length; i++) {
            nodes.push(this._getNode(type, data[i]));
        }
        return nodes;
    }

    _getNode(type, node) {
        const {collapsed} = this.state;
        const {renderItem} = this.props;
        const hasChildren = !!node.data;
        const i = node.id;
        const jid = node.jid;
        if (node.type === 'folder') {
            return (
                <View key={i} style={{
                    paddingTop: 10
                }}>
                    <TouchableOpacity onPress={() => this._toggleState.bind(this)(type, i, node)}>
                        {renderItem
                            ? renderItem(type, i, node)
                            : this._getNodeView(type, i, node)}
                    </TouchableOpacity>
                    <View style={styles.children}>
                        {!collapsed[i]
                            ? null
                            : this._getTree('children', node.data || [])}
                    </View>
                </View>
            );
        } else {
            return (
                <TouchableOpacity
                    key={i}
                    style={styles.contact}
                    onPress={() => this._onPressXCard(node)}>
                    <Image
                        style={styles.avatar}
                        source={{
                        uri: 'https://avatars2.githubusercontent.com/u/6269028?v=3&s=100'
                    }}/>
                    <Text style={styles.contactName}>{node.name}</Text>
                </TouchableOpacity>
            );
        }

    }

    _getNodeView(type, i, node) {
        const {collapsed} = this.state;
        const hasChildren = !!node.data;
        const iconStyle = !collapsed[i]
            ? styles.iconX
            : styles.iconY;
        const icon = !collapsed[i]
            ? require('../img/icon_folder_close.png')
            : require('../img/icon_folder_open.png');
        return (
            <View
                style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image style={iconStyle} source={icon}/>
                <Text
                    style={{
                    fontSize: 18,
                    color: '#3E3E3E'
                }}>
                    {node.name}
                </Text>
            </View>
        );
    }

    _toggleState(type, i, node) {
        const {collapsed} = this.state;
        const {onItemClicked} = this.props;

        collapsed[i] = !collapsed[i];
        this.setState({collapsed: collapsed});
        if (onItemClicked) {
            onItemClicked(type, i, node);
        }
    }

    _getStyle(type, tag) {
        return [
            styles[tag],
            styles[type + tag]
        ]
    }

    _onPressXCard(node) {
        console.log('_onPressXCard ' + node);
        var ViewController = NativeModules.ViewController;
        ViewController.onClickButton(node);
    }
}

// 样式
var styles = StyleSheet.create({
    tree: {
        backgroundColor: 'white',
        padding: 10
    },
    rootnode: {
        paddingBottom: 10
    },
    node: {
        paddingTop: 10
    },
    item: {
        flexDirection: 'row'
    },
    children: {
        paddingLeft: 30
    },
    icon: {
        paddingRight: 10,
        color: '#333',
        alignSelf: 'center'
    },
    roottext: {
        fontSize: 18
    },
    contact: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    contactName: {
        marginLeft: 10
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    iconX: {
        width: 12,
        height: 20,
        marginRight: 10
    },
    iconY: {
        width: 20,
        height: 12,
        marginRight: 10
    }
});

export default EnterpriseAddressbook;