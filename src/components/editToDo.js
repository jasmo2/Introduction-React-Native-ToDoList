import styles from '../styles/styles';
import React, { Component } from 'react';

import {
  View,
  TouchableHighlight,
  Text
} from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const options =  {
  fields: {
          txt: {
              label: 'To-Do Item',
              placeholder: 'Aquí algo, heee si.',
              autoFocus: true
          }
      }
}
const myToDo = t.struct({
    txt: t.Str,
    complete: t.Bool
});


class ToDoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      container: this.props.container
    };
  }

  componentDidMount(){
    this.setState({
      item: this.props.item
    })
  }
    toDoUpdate() {
        var value = this.refs.form.getValue();
        if (value) {
              let items = this.props.items;
              let index = this.props.id;
              if (index) {
                  items[index] = value;
              }
              else {
                  items.push(value)
              }

              this.props.nav.push({
                      index: 0,
                      passProps: {items: items}
              });

        }
    }

    render() {

        return (
            <View style={styles.todo}>
                <Form
                    ref="form"
                    type={myToDo}
                    options={options}
                    value={this.state.item}
                  />
                <TouchableHighlight
                    style={[styles.button, styles.saveButton]}
                    onPress={ this.toDoUpdate.bind(this) }
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default ToDoEdit;
