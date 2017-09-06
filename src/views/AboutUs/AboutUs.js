import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';


export default class AboutUs extends React.Component {


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Om oss yo</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        height: 24,
        width: 24,
    },
});
