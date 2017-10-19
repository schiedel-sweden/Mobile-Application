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

export default class MaterialInformationTouchableBlock extends Component {
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
        this.listInfoDescr = this.listInfoDescr.bind(this);
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
            ? <Image style={navStyles.icon}
                     source={require('./img/arrow_opened.png')}
              />
            : <Image style={navStyles.icon}
                     source={require('./img/arrow.png')}
              />;
        return arrowIcon;
    }
    /**
    * @return listMaterial[...]
    */
    listInfoDescr() {
        const listInfoDescr =
          <View style={styles.infoDescContainer}>
              <View>
                  <Text style={[globalStyles.p, styles.infoDesc]}>
                      Bruksområde
                  </Text>
                  <Text style={[globalStyles.p, styles.infoDesc]}>
                      Bruksområde
                  </Text>
              </View>
          </View>;
        return listInfoDescr;
    }

    /**
    * @return View
    */
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.setVisibleMat}>
                    <View style={styles.touchableContainer}>
                        <View style={styles.touchableItem}>
                            <Text style={globalStyles.h4}>
                                {this.props.matInfo}
                            </Text>
                             {this.getArrowIcon()}
                        </View>
                    </View>
                </TouchableOpacity>
                {this.state.visible && (this.listInfoDescr())}
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoDescContainer: {
        paddingHorizontal: globalStyles.PADDING,
        paddingTop: globalStyles.PADDING,
    },
    infoDesc: {
        paddingHorizontal: globalStyles.PADDING,
        paddingBottom: globalStyles.PADDING,
    },
});
