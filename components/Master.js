import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Main extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.main}>Hello from master</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#F9CE3C',
        fontSize: 35,
    }
});
