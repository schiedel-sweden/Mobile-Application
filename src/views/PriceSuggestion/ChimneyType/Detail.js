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
        this.switchingContainerColor = this.switchingContainerColor.bind(this);
    }
    /**
    * @param int props.order
    * @return styles
    */
    switchingContainerColor(order){
      if (order % 2 == 0) {
        return styles.containerLightBackground;
      } else {
        return styles.containerDarkBackground;
      }
    };

    /**
    * @return View
    */
    render() {
        return (
          <View style={this.switchingContainerColor(this.props.order)}>
              <View style={styles.content}>
                  <Text style={globalStyles.p}>
                      djshaf adskjfna fd askfj asd dsjf dsfjh dsaf jidsf öasfdhkhk
                  </Text>
                  <TouchableOpacity
                      style={styles.button}
                      onPress={function() {
                          this.props.touchMethod(this.props.order)
                      }.bind(this)}>
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
        borderTopWidth: 2,
        borderTopColor: '#B9B9B9',
    },
    containerDarkBackground: {
        backgroundColor: '#B9B9B9',
        padding: globalStyles.PADDING,
        borderTopWidth: 2,
        borderTopColor: '#EEEEEE',
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
