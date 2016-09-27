 import styles from '../styles/styles';
 import React, { Component } from 'react';
 import { Text, View, TouchableHighlight } from 'react-native';
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
   render() {
    return (
       <View style={{flex:1}}>
         <ToDoList
           items={this.state.items}
           onPressItem={this.openItem}
           onLongPressItem={this.AlertMenu} />
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
