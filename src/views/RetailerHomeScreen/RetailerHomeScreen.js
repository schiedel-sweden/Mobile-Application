import React from 'react';
import Nav from '../../components/Nav/Nav'
import Hero from './Hero';
import ButtonLargeGetPrice from './ButtonLargeGetPrice';
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
                <View style={styles.ButtonLargeWrapper}>
                    <ButtonLargeGetPrice />
                    <ButtonLargeGetPrice />
                </View>
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
    ButtonLargeWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    }
});
