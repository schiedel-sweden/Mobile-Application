import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import MaterialInformationTouchableBlock from './MaterialInformationTouchableBlock';
import MaterialTechnicalSpecification from './MaterialTechnicalSpecification';

export default class MaterialDetail extends Component {
    /**
    * @param props
    * @return setState
    */
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            materialInfoList: ["Bruksområde", "Brenseltyper", "Funksjoner/Fordeler", "HUSK"],
            materialTechnicalSpecsList: ["Streamningmotstand", "Varmeresisten",
              "Trykkfasthet ytterelement", "TrykkFasthet innerror",
              "Byggehoyde", "Feietest", "Frosttest"],
        }
        this.listMaterialInformation = this.listMaterialInformation.bind(this);
        this.listMaterialTechnicalSpecification = this.listMaterialTechnicalSpecification.bind(this);
    }

    /**
    * @return MaterialInformationTouchableBlock[...]
    */
    listMaterialInformation() {
        const materialInfoListTabB=  this.state.materialInfoList.map((matInfo, i) =>
          <MaterialInformationTouchableBlock
              key={i}
              matInfo={matInfo}
          />
        );
        return materialInfoListTabB;
    }
    /**
    * @return MaterialTechnicalSpecification[...]
    */
    listMaterialTechnicalSpecification() {
        const materialTechnicalSpecsListViews=  this.state.materialTechnicalSpecsList.map((matTecSpec, i) =>
          <MaterialTechnicalSpecification
              key={i}
              matTecSpec={matTecSpec}
          />
        );
        return materialTechnicalSpecsListViews;
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
                  <Text style={[globalStyles.h4, styles.info]}>
                      Information
                  </Text>
              </View>
              {this.listMaterialInformation()}
              <View style={styles.container}>
                  <Text style={[globalStyles.h4, styles.tecSpec]}>
                      Technical Specification
                  </Text>
                  {this.listMaterialTechnicalSpecification()}
              </View>
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
    info: {
        paddingHorizontal: globalStyles.PADDING,
    },
    tecSpec: {
        paddingHorizontal: globalStyles.PADDING,
        paddingBottom: globalStyles.PADDING * 0.2,
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
