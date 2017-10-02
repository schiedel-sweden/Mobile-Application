import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    ActivityIndicator,
} from 'react-native';

const TouchableBlock = props => {
    return (
        <TouchableOpacity>
            <View>
                <Text>{props.tagLine}</Text>

                <Text>{props.ingress}</Text>
                {props.visible && (
                    <View>
                        {props.mat.map(function(object, i) {
                            return <Text key={i}>{object}</Text>;
                        })}
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default TouchableBlock;
