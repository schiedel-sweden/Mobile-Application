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
                        </View>;
        return listItem;
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
                                {this.props.matInfo}                {this.getArrowIcon()}
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
    ingress: {
        paddingHorizontal: globalStyles.PADDING,
        paddingBottom: globalStyles.PADDING,
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
    icon: {
        alignSelf: 'flex-end',
    },
});
