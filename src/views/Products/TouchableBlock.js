import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';

export default class TouchableBlock extends Component {
    /**
    * @param props
    * @return setState
    */
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
        this.setVisibleMat = this.setVisibleMat.bind(this);
    }
    /**
    * @return bool setState
    */
    setVisibleMat() {
        this.setState({visible: !this.state.visible});
    };

    /**
    * @return View
    */
    render() {
        return (
            <TouchableOpacity onPress={this.setVisibleMat} style={styles.container}>
                <View>
                    <Text style={globalStyles.h1}>{this.props.tagline}</Text>
                </View>
                <View>
                    <Text style={globalStyles.h3}>{this.props.ingress}</Text>
                </View>
                {this.state.visible && (
                    <View style={styles.dropDownContiner}>
                        {this.props.mat.map(function(object, i) {
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
    }
}

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
