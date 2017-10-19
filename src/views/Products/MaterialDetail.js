import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import MaterialInformationTouchableBlock from './MaterialInformationTouchableBlock';

export default class MaterialDetail extends Component {
    /**
    * @param props
    * @return setState
    */
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            listMatInfo: ["Bruksområde", "Brenseltyper", "Funksjoner/Fordeler", "HUSK"],
        }
        this.listMaterialInformation = this.listMaterialInformation.bind(this);
    }

    /**
    * @return MaterialInformationTouchableBlock[...]
    */
    listMaterialInformation() {
        const listMatInfoTabB=  this.state.listMatInfo.map((matInfo, i) =>
          <MaterialInformationTouchableBlock
              key={i}
              matInfo={matInfo}
          />
        );
        return listMatInfoTabB;
    }

    /**
    * @return View
    */
    render() {
        return (
          <View >
              <Image
                  style={styles.img}
                  source={require('./img/roof.png')}
              />
              <View style={styles.container}>
                  <Text style={[globalStyles.h2, styles.topic]}>
                      Solid vent
                  </Text>
                  <Text style={[globalStyles.h4, styles.ingress]}>
                      Solid vent
                  </Text>
                  <Text style={[globalStyles.p, styles.text]}>
                      djshaf adskjfna fd askfj asd dsjf dsfjh dsaf jidsf öasfdhkhk
                  </Text>
                  <Text style={[globalStyles.h4, styles.ingress]}>
                      Solid vent
                  </Text>
              </View>
                  {this.listMaterialInformation()}
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        padding: globalStyles.PADDING,
    },
    topic: {
        paddingHorizontal: globalStyles.PADDING,
        paddingBottom: globalStyles.PADDING * 0.5,
    },
    ingress: {
        paddingHorizontal: globalStyles.PADDING,
        paddingBottom: globalStyles.PADDING,
    },
    text: {
        paddingHorizontal: globalStyles.PADDING,
        paddingBottom: globalStyles.PADDING,
        textAlign: 'left',
    },
    img: {
        resizeMode: 'cover',
        flex: 1,
        width: globalStyles.DEVICE_WIDTH,
        height: globalStyles.DEVICE_HEIGHT * 0.22,
    },

});
