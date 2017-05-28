import React from 'react';
import {AppRegistry, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

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
                text: 'Javascript',
                data: [
                    {
                        text: '1'
                    }
                ]
            }, {
                text: 'Java'
            }, {
                text: 'PHP'
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
        const {collapsed} = this.state;
        const {renderItem} = this.props;
        const hasChildren = !!node.data;
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
    }

    _getNodeView(type, i, node) {
        const {collapsed} = this.state;
        const iconSize = (type == 'root' ? 16 : 14);
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
        paddingLeft: 20
    },
    icon: {
        paddingRight: 10,
        color: '#333',
        alignSelf: 'center'
    },
    roottext: {
        fontSize: 18
    }
});

export default EnterpriseAddressbook;