import styles  from '../styles/styles';
import React, { Component }  from 'react';
import { ListView, Text } from 'react-native';

class ToDoList extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.items),
    };
  }

  componentDidMount(){

  }
  render() {
    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData.txt}</Text> }
      />
    );
  }
}

export default ToDoList;
