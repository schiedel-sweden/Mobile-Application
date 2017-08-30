import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';

import Nav from './src/components/Nav/Nav';
export default class App extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <StatusBar barStyle="default" />
            <Nav />
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        flex: 1,
    }
});

//https://www.youtube.com/watch?v=1xu1eeRCPEk
