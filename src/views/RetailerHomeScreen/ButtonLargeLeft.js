import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

export default class ButtonLargeLeft extends React.Component {
    handleClick(){
        alert('Left button clicked!');
    }
    render() {
        return(
            <TouchableOpacity style={styles.container} onPress={this.handleClick}>
                <Text style={styles.text}>Hello from larg button Left</Text>
                <Text style={styles.text}>More text</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        bottom: 0,
        flex: 1,
        justifyContent: 'center',
        top: 0,
        borderRightWidth: 1,
        borderColor: '#333333',
    },
    text: {
        textAlign: 'center',
    },
});
