import React from 'react';

import {
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class RetailersView extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=> alert('Växla användare')}>
                {/* This image is a placeholeder for now  */}
                <Image style={styles.img} source={require('../../images/icons/kontakta-oss.png')} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        height: 40,
        justifyContent: 'center',
        position: 'absolute',
        right: 5,
        top: 25,
        width: 40,
        zIndex: 2,
    },
    img: {
        height: 25,
        width: 25,
    },
});
