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
            <TouchableOpacity onPress={this.setVisibleMat} style={[styles.container, bGColor(this.props.matTopic.id)]}>
                <View>
                    <Text style={globalStyles.h1}>{this.props.matTopic.tagline}</Text>
                </View>
                <View>
                    <Text style={globalStyles.h3}>{this.props.matTopic.ingress}</Text>
                </View>
                {this.state.visible && (
                    <View style={styles.dropDownContainer}>
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

/**
* @param props.matTopic.id
* @return styles
*/
function bGColor(id){
  if (id % 2 == 0) {
    return styles.lightBackground;
  } else {
    return styles.darkBackground;
  }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#B9B9B9',
        padding: globalStyles.PADDING,
    },
    lightBackground: {
      backgroundColor: '#EEEEEE',
    },
    darkBackground: {
      backgroundColor: '#B9B9B9',
    },
    dropDownContainer: {
        paddingHorizontal: globalStyles.PADDING,
    },
    dropDownText: {
        textAlign: 'left',
    },
});
