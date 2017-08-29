import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './components/Nav/Nav';
export default class App extends React.Component {
    render() {
        return (
        <View style={styles.container}>
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

// https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html#migrating-from-react.proptypes
