import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';

export default class Material extends Component {
    /**
    * @param props
    * @return setState
    */
    constructor(props) {
        super(props);
        this.switchingContainerColor = this.switchingContainerColor.bind(this);
    }
    /**
    * @param bool props.isLightBackground
    * @return styles
    */
    switchingContainerColor(lightBackground){
      if (lightBackground) {
        return styles.containerLightBackground;
      } else {
        return styles.containerDarkBackground;
      }
    };

    /**
    * @return View
    */
    render() {
        const {navigate} = this.props.navigation;
        return (
          <View style={this.switchingContainerColor(this.props.isLightBackground)}>
              <Text style={[globalStyles.h4, styles.text]}>
                  {this.props.mat}
              </Text>
              <Text style={[globalStyles.p, styles.text]}>
                  djshaf adskjfna fd askfj asd dsjf dsfjh dsaf jidsf öasfdhkhk
              </Text>
              <Text
                style={[globalStyles.p, styles.link]}
                onPress={this.props.setActiveMaterialDetailView}>
                  Läs mer... // the screen to navigate to is not avalaible yet
              </Text>
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
