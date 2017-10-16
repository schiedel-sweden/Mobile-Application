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
    }

    /**
    * @return bool setState
    */
    setVisibleMat() {
        this.setState({visible: !this.state.visible});
    }

    /**
    * @return View
    */
    render() {
        let image = this.state.visible? <Image style={[navStyles.icon,styles.img]}
                                        source={require('./img/arrow_opened.png')}/>
                                        : <Image style={[navStyles.icon,styles.img]}
                                        source={require('./img/arrow.png')}/>;
        return (
            <View>
                <TouchableOpacity onPress={this.setVisibleMat}>
                    <View style={[styles.container,bGSwitchingColor(this.props.order)]}>
                        <View>
                            <Text style={globalStyles.h1}>{this.props.matTopic.tagline}</Text>
                        </View>
                        <View>
                            <Text style={globalStyles.h3}>{this.props.matTopic.ingress}</Text>
                        </View>
                        {image}
                    </View>
                </TouchableOpacity>
                {this.state.visible && (listMaterial(this.props))}
            </View>
        );
    }
}


/**
* @param state
* @return TouchableBlock[...]
*/
function listMaterial(props) {
    let isLightBackground = true;
    if (props.order % 2 == 0) {
      isLightBackground = true;
    } else {
      isLightBackground = false;
    };
    const listMaterial = props.mat.map((mat, i) =>
            <Material key={i}
                      mat={mat}
                      navigation={props.navigation}
                      isLightBackground={isLightBackground}/>
        );
    return listMaterial;
};
/**
* @param props.matTopic.id
* @return styles
*/
function bGSwitchingColor(order){
  if (order % 2 == 0) {
    return styles.lightBackground;
  } else {
    return styles.darkBackground;
  }
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        padding: globalStyles.PADDING,
    },
    lightBackground: {
        backgroundColor: '#EEEEEE',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#B9B9B9',
    },
    darkBackground: {
        backgroundColor: '#B9B9B9',
    },
    img: {
        alignSelf: 'flex-end',
    }
});
