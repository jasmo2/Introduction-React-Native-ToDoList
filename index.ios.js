/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from './src/styles/styles';
import Container from './src/components/container';
import ToDoEdit from './src/components/editToDo';

const routes = [
    { title: 'TO DOs', index: 0 },
    { title: 'To-Do Form', index:1}
]
class todoList extends Component {
  render() {
    return (
      <Navigator
              initialRouteStack = {routes}
              initialRoute={routes[0]}
              renderScene={(route,navigator) => {

                  if(route.index == 0) {
                   return <Container nav={navigator} {...route.passProps}/>
                 }
                 if(route.index == 1) {
                   return <ToDoEdit nav={navigator} {...route.passProps} />
                 }
              }}
              navigationBar={
                <Navigator.NavigationBar
                  routeMapper={{
                    LeftButton: (route, navigator, index, navState) => {
                      if (route.index === 0) {
                        return null;
                      } else {
                        return (
                          <TouchableHighlight onPress={() => navigator.pop()}>
                            <Text>Back</Text>
                          </TouchableHighlight>
                        );
                      }
                    },
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
