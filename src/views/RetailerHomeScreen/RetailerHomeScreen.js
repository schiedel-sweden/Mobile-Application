import React from 'react';
import Nav from '../../components/Nav/Nav'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class RetailerHomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Välkommen',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
        <View style={styles.container}>
            <Text>Reatiler Home Screen</Text>
            <Nav />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default RetailerHomeScreen;
