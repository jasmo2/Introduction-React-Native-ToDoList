'use strict';
import styles from '../styles/styles';
import React, {Component} from 'react';
import { Text, View, TouchableHighlight } from 'react-native';


class Item extends Component {

    render() {
        let item = this.props.item;
        return (
            <View>
                <TouchableHighlight
                    onPress={this.props.onPress}
                    onLongPress={this.props.onLongPress}>
                    <View style={styles.container}>
                        <Text
                            style={[styles.txt, item.complete && styles.completed]}>
                            {item.txt}
                        </Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.hr}/>
            </View>
        );
    }
}

export default Item;
