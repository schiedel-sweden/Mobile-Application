import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

export default class ButtonLargeGetPrice extends React.Component {
    render() {
        return(
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>Hello from larg button</Text>
                <Text style={styles.text}>More text</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: 'red',
        bottom: 0,
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        top: 0,
    },
    text: {
        textAlign: 'center',
    },
});
