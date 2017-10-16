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
        this.state = {
            mat: '',
        }
    }

    /**
    * @return View
    */
    render() {
        const { navigate } = this.props.navigation;
        return (
          <View style={switchingContainerColor(this.props.isLightBackground)}>
              <Text style={[globalStyles.h4, styles.text]}>
                  {this.props.mat}
              </Text>
              <Text style={[globalStyles.p, styles.text]}>
                  djshaf adskjfna fd askfj asd dsjf dsfjh dsaf jidsf öasfdhkhk
              </Text>
              <Text style={[globalStyles.p, styles.link]} onPress={() => navigate('Retailers')}>
                  Läs mer... // the screen to navigate to is not avalaible yet
              </Text>
          </View>
        );
    }
}

function switchingContainerColor(lightBackground){
  if (lightBackground) {
    return styles.containerLightBackground;
  } else {
    return styles.containerDarkBackground;
  }
};

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
