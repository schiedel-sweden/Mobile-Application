import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import Detail from './Detail';
import navStyles from '../../../styles/navStyles';
import globalStyles from '../../../styles/globalStyles';

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
        this.setVisibleDetail = this.setVisibleDetail.bind(this);
        this.bGSwitchingColor = this.bGSwitchingColor.bind(this);
        this.getArrowIcon = this.getArrowIcon.bind(this);
    }

    /**
    * @return bool setState
    */
    setVisibleDetail() {
        this.setState({visible: !this.state.visible});
    }
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
                     source={require('../img/arrow_opened.png')}
              />
            : <Image style={[navStyles.icon,styles.img]}
                     source={require('../img/arrow.png')}
              />;
        return arrowIcon;
    }

    /**
    * @return View
    */
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.setVisibleDetail}>
                    <View style={[styles.container,this.bGSwitchingColor(this.props.order)]}>
                        <View style={styles.topic}>
                            <Text style={globalStyles.h1}>
                                {this.props.chimneyType.tagline}
                            </Text>
                        </View>
                        <View>
                            <Text style={globalStyles.h3}>
                                {this.props.chimneyType.ingress}
                            </Text>
                        </View>
                        {this.getArrowIcon()}
                    </View>
                </TouchableOpacity>
                {this.state.visible &&
                  <Detail />}
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
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#B9B9B9',
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
