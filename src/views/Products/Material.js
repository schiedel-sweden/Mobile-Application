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
        return (
          <View style={styles.container}>
              <Text style={styles.text}>
                  {this.props.mat}
              </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      padding: globalStyles.PADDING,
      borderRadius: 1,
      borderWidth: 1,
      borderColor: '#B9B9B9',
    },
    text: {
        textAlign: 'left',
    },
});
