import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
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
    }

    render() {
        const data = [
            {
                text: '研发部',
                type: 'folder',
                data: [
                    {
                        text: '1',
                        type: 'item'
                    }, {
                        text: '2',
                        type: 'item'
                    }, {
                        text: '3',
                        type: 'item'
                    }
                ]
            }, {
                text: '销售部',
                type: 'folder'
            }, {
                text: '客服部',
                type: 'folder'
            }
        ];
        return (
            <View style={styles.tree}>
                {this._getTree('root', data)}
            </View>
        );
    }

    _getTree(type, data) {
        const nodes = [];
        for (const i = 0; i < data.length; i++) {
            nodes.push(this._getNode(type, i, data[i]))
        }
        return nodes;
    }

    _getNode(type, i, node) {
        console.log(i + ' ' + node.type + ' ' + node.text);
        const {collapsed} = this.state;
        const {renderItem} = this.props;
        const hasChildren = !!node.data;
        if (node.type === 'folder') {
            return (
                <View key={i} style={this._getStyle(type, 'node')}>
                    <TouchableOpacity onPress={() => this._toggleState.bind(this)(type, i, node)}>
                        {renderItem
                            ? renderItem(type, i, node)
                            : this._getNodeView(type, i, node)}
                    </TouchableOpacity>
                    <View style={styles.children}>
                        {collapsed[type + i]
                            ? null
                            : this._getTree('children', node.data || [])}
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.contact}>
                    <Image
                        style={styles.avatar}
                        source={{
                        uri: 'https://avatars2.githubusercontent.com/u/6269028?v=3&s=100'
                    }}/>
                    <Text style={styles.contactName}>{node.text}</Text>
                </View>
            );
        }

    }

    _getNodeView(type, i, node) {
        const {collapsed} = this.state;
        const iconSize = (type == 'root'
            ? 16
            : 14);
        const hasChildren = !!node.data
        const icon = node.icon
            ? node.icon
            : (collapsed[type + i]
                ? 'chevron-right'
                : 'keyboard-arrow-down')
        return (
            <View style={this._getStyle(type, 'item')}>
                <Text style={this._getStyle(type, 'text')}>
                    {node.text}
                </Text>
            </View>
        );
    }

    _toggleState(type, i, node) {
        const {collapsed} = this.state
        const {onItemClicked} = this.props

        collapsed[type + i] = !collapsed[type + i]
        this.setState({collapsed: collapsed})
        if (onItemClicked) 
            onItemClicked(type, i, node)
    }

    _getStyle(type, tag) {
        return [
            styles[tag],
            styles[type + tag]
        ]
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
        paddingLeft: 10
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
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    contactName: {
        marginLeft: 10
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10
    }
});

export default EnterpriseAddressbook;