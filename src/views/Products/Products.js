import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class Products extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
        <View style={styles.container}>
            <Text>Produkter yo</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
