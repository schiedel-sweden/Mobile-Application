import React from 'react';
import ButtonSwitchUser from '../../components/ButtonSwitchUser/ButtonSwitchUser';
import Style from '../../styles/globalStyles';
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
                <ButtonSwitchUser />
                <Image style={styles.img} source={require('./img/roof_image.png')} />
                <View style={styles.pos}>
                    <Text style={Style.h2}>Välkomsttext här</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        flex: 1,
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
    pos: {
        position: 'absolute',
    }
});
