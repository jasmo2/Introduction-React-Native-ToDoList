/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text
} from 'react-native';
import styles from './src/styles/styles';
import Container from './src/components/container';

class todoList extends Component {
  render() {
    return (
      <Navigator
              initialRoute={{ title: 'TO DOs', index: 0 }}
              renderScene={(route,navigator) =>  <Container nav={navigator}/> }
              navigationBar={
                <Navigator.NavigationBar
                  routeMapper={{
                    LeftButton: (route, navigator, index, navState) =>
                     { return null; },
                    RightButton: (route, navigator, index, navState) =>
                      { return null; },
                    Title: (route, navigator, index, navState) =>
                      { return (<Text>TO DOs</Text>); },
                  }}
                  style={styles.navigator}
                />
              }
      />
    );
  }
}

AppRegistry.registerComponent('todoList', () => todoList);
