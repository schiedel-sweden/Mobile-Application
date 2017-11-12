import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import TouchableBlock from './ChimneyType/TouchableBlock';

export default class ChimneyType extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chimneyType: [{id: 0, tagline: "PERMETER", ingress: "permeter"},
                         {id: 1, tagline: "SOLID VENT", ingress: "solid vent"},
                         {id: 2, tagline: "ETESJEPIPE", ingress: "etesjepipe"},
                         {id: 3, tagline: "RONDO", ingress: "rondo"}],
            choice: '',
            options: ['permeter', 'solid vent', 'etesjepipe', 'rondo'],
        };
        this.touchMethod = this.touchMethod.bind(this);
        this.listTouchableBlock = this.listTouchableBlock.bind(this);
    }

    componentWillMount = () => {
        this.setState({
            choice: this.props.propState.choice,
            options: this.props.propState.options,
        });
    }

    componentWillReceiveProps = (newprops) => {
        this.setState({
            choice: newprops.propState.choice,
            options: newprops.propState.options,
        });
    }

    stateSetter = (i) => {
        if (i === 0) {
            this.setState({ choice: 'permeter' });
        }
        if (i === 1) {
            this.setState({ choice: 'solid vent' });
        }
        if (i === 2) {
            this.setState({ choice: 'etesjepipe' });
        }
        if (i === 3) {
            this.setState({ choice: 'rondo' });
        }
    }

    async touchMethod(i) {
        try {
            await this.stateSetter(i);
        }
        catch(error) {
            console.log(error);
        }
        this.callback();


    }

    callback = () => {
        this.props.parentCallback(this.state);
    }

    /**
    * @return TouchableBlock[...]
    */
    listTouchableBlock() {
        const listTouchableBlock = this.state.chimneyType.map((topic, i) =>
            <TouchableBlock key = {i} chimneyType={topic}
            visible={this.state.visible1}
            order={i}/>
        );
        return listTouchableBlock;
    }

    render() {
        return (
            <View>
                <View>
                    {this.listTouchableBlock()}
                    {this.state.options.map(function(item, i) {
                        return (
                            <TouchableOpacity
                                onPress={function() {
                                    this.touchMethod(i)
                                }.bind(this)}
                                style={styles.items}
                                key={i} >
                                <Text>{item}</Text>
                                <View>
                                    {i == 0 ? (
                                        <Text>PERMETER</Text>
                                    ) : i == 1 ? (
                                        <Text>SOLID VENT</Text>
                                    ) : i == 2 ? (
                                        <Text>ETESJEPIPE</Text>
                                    ) : i == 3 ? (
                                        <Text>RONDO</Text>
                                    ) : (
                                        <Text>FINNS IKKE</Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                        );
                    }, this)}
                </View>
                <View style={styles.center}>
                    <Text>SKORSTENSTYP</Text>
                    <Text>Current choice:</Text>
                    <Text>{this.state.choice}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    items: {
        alignItems: 'center',
        height: 50,
        backgroundColor: '#EEEEEE',
        margin: 10,
    },
    center: {
        alignItems: 'center',
    },
});
