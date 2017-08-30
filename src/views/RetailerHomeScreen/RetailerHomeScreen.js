import React from 'react';
import Nav from '../../components/Nav/Nav'
import Hero from './Hero';
import {
    StatusBar,
    ScrollView,
    Text,
    StyleSheet,
    View,
} from 'react-native';

export default class RetailerHomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Välkommen',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Hero />
                <Nav />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
});
