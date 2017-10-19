import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';

export default class MaterialTechnicalSpecification extends Component {
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
          <View style={styles.container}>
              <View style={styles.textWrapper}>
                  <Text style={globalStyles.p}>
                      {this.props.matTecSpec}          Value
                  </Text>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: globalStyles.PADDING,
        paddingTop: globalStyles.PADDING * 0.6,
    },
    textWrapper: {
        borderRadius: 1,
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
    },

});
