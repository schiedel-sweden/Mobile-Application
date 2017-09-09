import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';

export default class AboutUs extends React.Component {


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={globalStyles.p}>Om oss yo</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 30,
    },
});
