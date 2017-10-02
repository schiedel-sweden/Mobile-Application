import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    ActivityIndicator,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';

const TouchableBlock = props => {
    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <Text style={globalStyles.h1}>{props.tagline}</Text>
            </View>
            <View>
                <Text style={globalStyles.h3}>{props.ingress}</Text>
            </View>
            {props.visible && (
                <View style={styles.dropDownContiner}>
                    {props.mat.map(function(object, i) {
                        return (
                            <Text style={styles.dropDownText} key={i}>
                                {object}
                            </Text>
                        );
                    })}
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B9B9B9',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        padding: globalStyles.PADDING,
    },
    dropDownContiner: {
        paddingHorizontal: globalStyles.PADDING,
    },
    dropDownText: {
        textAlign: 'left',
    },
});

export default TouchableBlock;
