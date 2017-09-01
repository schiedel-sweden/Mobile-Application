import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class ButtonLargeLeft extends React.Component {
    render() {

        return(
            <View style={styles.container}>
                <Text style={styles.text}>Hello from larg button Left</Text>
                <Text style={styles.text}>More text</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#333333',
        borderRightWidth: 1,
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
});
