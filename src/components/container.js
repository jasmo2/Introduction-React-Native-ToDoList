 import styles from '../styles/styles';
 import React, { Component } from 'react';
 import { Text, View } from 'react-native';

 class Container extends Component {

   render() {
    return (
       <View style={{flex:1}}>
         <Text style={styles.todo}>I am the ToDo Container</Text>
       </View>
     );
   }

 };

 export default Container;
