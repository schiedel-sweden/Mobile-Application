import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import globalStyles from '../../../styles/globalStyles';

export default class Detail extends Component {
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
          <View style={styles.containerLightBackground}>
              <View style={styles.content}>
                  <Text style={globalStyles.p}>
                      djshaf adskjfna fd askfj asd dsjf dsfjh dsaf jidsf öasfdhkhk
                  </Text>
                  <TouchableOpacity
                      style={styles.button}
                      onPress={this.onPress}>
                      <Text>Velg Permeter</Text>
                  </TouchableOpacity>
              </View>
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
    button: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        backgroundColor: '#F9CE3C',
        marginTop: globalStyles.PADDING,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        paddingHorizontal: globalStyles.PADDING,
        alignItems: 'center',
    },
});
