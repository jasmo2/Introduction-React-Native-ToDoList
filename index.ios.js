/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS
} from 'react-native';
import styles from './src/styles/styles';
import Container from './src/components/container';

class todoList extends Component {
  render() {
    return (
      <NavigatorIOS
              style={styles.navigator}
              initialRoute={{component: Container, title: 'TO DOs'}}/>
    );
  }
}

AppRegistry.registerComponent('todoList', () => todoList);
