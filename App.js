import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Nav from './src/components/Nav/Nav';
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
