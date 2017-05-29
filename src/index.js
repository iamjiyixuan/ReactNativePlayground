import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HelloWorld from './HelloWorld'
import ActivityIndicatorDemo from './ActivityIndicatorDemo'
import ButtonDemo from './ButtonDemo'
import Contacts from './Contacts'
import EnterpriseAddressbook from './EnterpriseAddressbook'
import News from './News'

class Index extends React.Component {
  static navigationOptions = {
    title: 'React Native Playground'
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          'id': 'HelloWorld',
          'title': 'Hello World'
        }, {
          'id': 'ActivityIndicatorDemo',
          'title': 'ActivityIndicator Demo'
        }, {
          'id': 'ButtonDemo',
          'title': 'Button Demo'
        }, {
          'id': 'Contacts',
          'title': 'Contacts'
        }, {
          'id': 'News',
          'title': 'News'
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
        <Text style={styles.rowText}>{rowData.title}</Text>
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
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE'
  },
  rowText: {
    color: '#3E3E3E',
    marginLeft: 10
  }
});

const ReactNativePlayground = StackNavigator({
  Index: {
    screen: Index
  },
  HelloWorld: {
    screen: HelloWorld
  },
  ActivityIndicatorDemo: {
    screen: ActivityIndicatorDemo
  },
  ButtonDemo: {
    screen: ButtonDemo
  },
  Contacts: {
    screen: Contacts
  },
  EnterpriseAddressbook: {
    screen: EnterpriseAddressbook
  },
  News: {
    screen: News
  }
});

AppRegistry.registerComponent('ReactNativePlayground', () => ReactNativePlayground);
