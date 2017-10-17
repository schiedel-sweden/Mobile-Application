import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';

export default class MaterialDetail extends Component {
    /**
    * @param props
    * @return setState
    */
    constructor(props) {
        super(props);
    }

    /**
    * @return View
    */
    render() {
        return (
          <View >
              <Text style={[globalStyles.p, styles.text]}>
                  djshaf adskjfna fd askfj asd dsjf dsfjh dsaf jidsf öasfdhkhk
              </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    containerLightBackground: {
        backgroundColor: '#EEEEEE',
        padding: globalStyles.PADDING,
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#B9B9B9',
    },
    containerDarkBackground: {
        backgroundColor: '#B9B9B9',
        padding: globalStyles.PADDING,
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#EEEEEE',
    },
    text: {
        paddingHorizontal: globalStyles.PADDING,
        paddingBottom: globalStyles.PADDING,
        textAlign: 'left',
    },
    link: {
        color: '#F9CE3C',
        paddingHorizontal: globalStyles.PADDING,
        textAlign: 'left',
    },
});
