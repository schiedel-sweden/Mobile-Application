import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import navStyles from '../../styles/navStyles';

export default class MaterialDetail extends Component {
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
        this.listItem = this.listItem.bind(this);
    }

    /**
    * @return bool setState
    */
    setVisibleMat() {
        this.setState({visible: !this.state.visible});
    }
    /**
    * @return Image
    */
    getArrowIcon(){
        const arrowIcon = this.state.visible
            ? <Image style={[navStyles.icon, styles.icon]}
                     source={require('./img/arrow_opened.png')}
              />
            : <Image style={[navStyles.icon, styles.icon]}
                     source={require('./img/arrow.png')}
              />;
        return arrowIcon;
    }
    /**
    * @return listMaterial[...]
    */
    listItem() {
        const listItem = <View>
                            <Text style={globalStyles.h4}>
                              Bruksområde
                            </Text>
                            <Text style={globalStyles.h4}>
                              Bruksområde
                            </Text>
                        </View>
        return listItem;
    };

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
              <TouchableOpacity onPress={this.setVisibleMat}>
                  <View style={styles.touchableContainer}>
                      <View style={styles.touchableItem}>
                          <Text style={globalStyles.h4}>
                              Bruksområde                 {this.getArrowIcon()}
                          </Text>
                      </View>
                  </View>
              </TouchableOpacity>
              {this.state.visible && (this.listItem())}
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        padding: globalStyles.PADDING,
    },
    touchableContainer: {
        backgroundColor: '#B9B9B9',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        paddingHorizontal: globalStyles.PADDING,
        paddingVertical: globalStyles.PADDING * 0.25,
    },
    touchableItem: {
        paddingHorizontal: globalStyles.PADDING,
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
    icon: {
        alignSelf: 'flex-end',
    },

});
