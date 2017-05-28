import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    ListView,
    TouchableOpacity
} from 'react-native';

class Contacts extends React.Component {
    static navigationOptions = {
        title: 'Contacts'
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
        this.state = {
            dataSource: ds.cloneWithRowsAndSections({
                A: [
                    {
                        'name': '关羽',
                        'avatar': ''
                    }, {
                        'name': '张飞',
                        'avatar': ''
                    }, {
                        'name': '刘备',
                        'avatar': ''
                    }
                ],
                B: [
                    {
                        'name': '关羽',
                        'avatar': ''
                    }, {
                        'name': '张飞',
                        'avatar': ''
                    }, {
                        'name': '刘备',
                        'avatar': ''
                    }
                ],
                C: [
                    {
                        'name': '关羽',
                        'avatar': ''
                    }, {
                        'name': '张飞',
                        'avatar': ''
                    }, {
                        'name': '刘备',
                        'avatar': ''
                    }
                ],
                D: [
                    {
                        'name': '关羽',
                        'avatar': ''
                    }, {
                        'name': '张飞',
                        'avatar': ''
                    }, {
                        'name': '刘备',
                        'avatar': ''
                    }
                ]
            })
        };
        this._renderRow = this
            ._renderRow
            .bind(this);
        this._onPressRow = this
            ._onPressRow
            .bind(this);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (<ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            renderSectionHeader={this._renderSectionHeader}
            renderFooter={this._renderFooter}/>);
    }

    _renderFooter() {
        console.log('renderFooter')
        return (
            <View style={styles.footer}>
                <Text style={styles.footerText}>Footer</Text>
            </View>
        );
    }

    _renderSectionHeader(sectionData, category) {
        return (
            <View style={styles.section}>
                <Text style={styles.sectionText}>{category}</Text>
            </View>
        )
    }

    _renderRow(rowData, sectionID, rowID, highlightRow) {
        const {navigate} = this.props.navigation;
        return (
            <TouchableOpacity
                style={styles.row}
                onPress={() => this._onPressRow(rowData, rowID)}>
                <Image
                    style={styles.avatar}
                    source={{
                    uri: 'https://facebook.github.io/react/img/logo_og.png'
                }}/>
                <Text style={styles.nameText}>{rowData.name}</Text>
            </TouchableOpacity>
        );
    }

    _onPressRow(rowData, rowID) {
        console.log('rowID=' + rowID + ', rowData.name=' + rowData.name)
        const {navigate} = this.props.navigation;
        navigate('EnterpriseAddressbook')
    }
}

// 样式
var styles = StyleSheet.create({
    section: {
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#39B2FC'
    },
    sectionText: {
        color: 'white',
        marginLeft: 10
    },
    row: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#EEEEEE'
    },
    footer: {
        height: 80,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerText: {
        fontSize: 20,
        color: 'white'
    },
    nameText: {
        color: '#3E3E3E',
        marginLeft: 10
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10
    }
});

export default Contacts;