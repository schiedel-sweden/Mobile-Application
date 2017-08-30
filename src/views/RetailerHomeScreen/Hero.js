import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

export default class Hero extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.img} source={require('./img/roof_image.png')} />
                <Text style={styles.text}>Välkomsttext Här</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        borderBottomWidth: 2,
        borderColor: '#000',
        flex: 0.5,
        justifyContent: 'center',
    },
    img: {
        bottom: 0,
        flex: 1,
        left: 0,
        opacity: 0.3,
        resizeMode: 'cover',
        right: 0,
        top: 0,
    },
    text: {
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 25,
        position: 'absolute',
    }
});
