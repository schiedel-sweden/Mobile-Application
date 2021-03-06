import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import Material from './Material';
import navStyles from '../../styles/navStyles';
import globalStyles from '../../styles/globalStyles';

export default class TouchableBlock extends Component {
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
        this.listMaterial = this.listMaterial.bind(this);
        this.bGSwitchingColor = this.bGSwitchingColor.bind(this);
        this.getArrowIcon = this.getArrowIcon.bind(this);
    }

    /**
    * @return bool setState
    */
    setVisibleMat() {
        this.setState({visible: !this.state.visible});
    }
    /**
    * @return listMaterial[...]
    */
    listMaterial() {
        let isLightBackground = true;
        if (this.props.order % 2 == 0) {
          isLightBackground = true;
        } else {
          isLightBackground = false;
        };
        const listMaterial = this.props.material.map((mat, i) =>
                <Material key={i}
                          mat={mat}
                          navigation={this.props.navigation}
                          isLightBackground={isLightBackground}
                          setActiveMaterialDetailView = {this.props.setActiveMaterialDetailView}
                />
            );
        return listMaterial;
    };
    /**
    * @param props.order
    * @return styles
    */
    bGSwitchingColor(order){
        if (order % 2 == 0) {
          return styles.lightBackground;
        } else {
          return styles.darkBackground;
        }
    };
    /**
    * @return Image
    */
    getArrowIcon(){
        const arrowIcon = this.state.visible
            ? <Image style={[navStyles.icon,styles.img]}
                     source={require('./img/arrow_opened.png')}
              />
            : <Image style={[navStyles.icon,styles.img]}
                     source={require('./img/arrow.png')}
              />;
        return arrowIcon;
    }

    /**
    * @return View
    */
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.setVisibleMat}>
                    <View style={[styles.container,this.bGSwitchingColor(this.props.order)]}>
                        <View style={styles.topic}>
                            <Text style={globalStyles.h1}>
                                {this.props.materialTopic.tagline}
                            </Text>
                        </View>
                        <View>
                            <Text style={globalStyles.h3}>
                                {this.props.materialTopic.ingress}
                            </Text>
                        </View>
                        {this.getArrowIcon()}
                    </View>
                </TouchableOpacity>
                {this.state.visible && (this.listMaterial())}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        padding: globalStyles.PADDING,
    },
    lightBackground: {
        backgroundColor: '#EEEEEE',
        borderTopWidth: 1,
        borderTopColor: '#B9B9B9',
    },
    darkBackground: {
        backgroundColor: '#B9B9B9',
    },
    img: {
        alignSelf: 'flex-end',
    },
    topic: {
        paddingTop: globalStyles.PADDING,
    },
});
