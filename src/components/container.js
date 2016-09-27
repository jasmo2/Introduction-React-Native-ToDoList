import styles from '../styles/styles';
import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Alert, Navigator } from 'react-native';
import ToDoList from './toDoList';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {txt: '¡Aprendamos react native!', complete: false},
        {txt: 'To-Doing it', complete: true}
      ]
    };
  }
  alertMenu(rowData, rowID) {
    Alert.alert(
      'Quick Menu',
      'presión Larga'
    )
  }
  openItem(rowData, rowID) {
    Alert.alert(
      'tap',
      'tap tap.. tap'
    )
  }
  render() {
    return (
      <View style={{flex:1, paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight+ 50}}>
        <ToDoList
          items={this.state.items}
          onPressItem={this.openItem.bind(this)}
          onLongPressItem={this.alertMenu.bind(this)}
        />
        <TouchableHighlight
          style={[styles.button, styles.newButton]}
          underlayColor='#99d9f4'
          onPress={this.openItem}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }

};

export default Container;
