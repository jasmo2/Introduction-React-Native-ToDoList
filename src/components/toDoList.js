import styles  from '../styles/styles';
import React, { Component }  from 'react';
import { ListView, Text } from 'react-native';
import Item from './item';

class ToDoList extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.items),
    };
  }

  render() {
    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={ (rowData, sectionID, rowID) => (
          <Item item={rowData}
            onPress={() => this.props.onPressItem(rowData, rowID)}
            onLongPress={() => this.props.onLongPressItem(rowData, rowID)}
          />
        )}
      />
    );
  }
}

export default ToDoList;
