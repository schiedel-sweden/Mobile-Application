import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

export default class ButtonLargeRight extends React.Component {
    handleClick(){
        alert('Right button clicked!');
    }
    render() {
        return(
            <TouchableOpacity style={styles.container} onPress={this.handleClick}>
                <Text style={styles.text}>Hello from larg button Right</Text>
                <Text style={styles.text}>More text</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9CE3C',
        bottom: 0,
        flex: 1,
        justifyContent: 'center',
        top: 0,
        borderLeftWidth: 1,
        borderColor: '#333333',
    },
    text: {
        textAlign: 'center',
    },
});
