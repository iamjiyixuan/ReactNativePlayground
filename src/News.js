import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';

class News extends React.Component {
    static navigationOptions = {
        title: 'News'
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    'name': '赵云',
                    'content': '26日，乐视体育宣布公司部分原有股东和中意宁波生态园下属基金确认参与B+轮，公司投后估值为240亿。乐视体育没有公布融资数额。宁波生态园下属基金将为乐视体育提供' +
                            '一块综合建设用地，用于建设乐视体育小镇。这块地也是宁波生态园下述基金参与B+轮增资的主要资产，乐视体育计划将总部搬到宁波生态园。'
                }, {
                    'name': '曹操',
                    'content': '5月29日圆通速递发起了“全球包裹联盟”（Global Parcel Alliance），这是唯一一个由国内物流快递企业发起的国际化物流快递联盟平台。'
                }, {
                    'name': '曹操',
                    'content': '中国快递企业走向国际化。'
                }
            ])
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
        return (<ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>);
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
                    uri: 'https://avatars2.githubusercontent.com/u/6269028?v=3&s=100'
                }}/>
                <View
                    style={{
                    marginTop: 10,
                    marginBottom: 10,
                    marginRight: 60
                }}>
                    <Text style={styles.nameText}>{rowData.name}</Text>
                    <Text style={styles.contentText}>{rowData.content}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _onPressRow(rowData, rowID) {
        console.log('rowID=' + rowID + ', rowData.id=' + rowData.id)
        const {navigate} = this.props.navigation;
        navigate(rowData.id)
    }
}

// 样式
var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#EEEEEE',
        backgroundColor: 'white'
    },
    nameText: {
        fontSize: 12,
        color: '#39B2FC'
    },
    contentText: {
        marginTop: 5,
        color: '#3E3E3E'
    },
    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 15
    }
});

export default News;