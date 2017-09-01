import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class ButtonLargeRight extends React.Component {
    handleClick(){
        alert('Right button clicked!');
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Hello from larg button Right</Text>
                <Text style={styles.text}>More text</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#333333',
        borderLeftWidth: 1,
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
});
