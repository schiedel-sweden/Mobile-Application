import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Image,
} from 'react-native';

import BoxRow from '../GridBoxes/BoxRow'

export default class ObjectSummarizer extends Component {


    constructor(props) {
        super(props);

        this.state = {

            rowItems: props.propState.rowItems,

            nettoSum: 0,
            moms: 0,
            totalSum: 0
        }
    }

    componentWillMount = async () => {
        await this.setState({
            rowItems: this.props.propState.rowItems,

            nettoSum: this.props.propState.nettoSum,
            moms: this.props.propState.moms,
            totalSum: this.props.propState.totalSum,
        });
    }

    componentWillReceiveProps = async (newprops) => {
        await this.setState({
            rowItems: newprops.propState.rowItems,

            nettoSum: newprops.propState.nettoSum,
            moms: newprops.propState.moms,
            totalSum: newprops.propState.totalSum,
        });
    }

    // add callback functions
    sendCallback = (sum, antal, number) => {
        let stateMarker = this.state.rowItems;
        for(let i = 0; i < this.state.rowItems.length; i++) {
            if (number === this.state.rowItems[i].number) {
                stateMarker[i].sum = sum;
                stateMarker[i].antal = antal;
                this.setState({stateMarker});
            }
        }
        this.setTotalSum();
    }

    setTotalSum = async () => {
        let netto = 0;
        let rowItems = this.state.rowItems;
        for(let i = 0; i < this.state.rowItems.length; i++) {
            netto += rowItems[i].sum
        }
        let moms = netto / 4;
        // if moms is NaN, make it 0
        // should only be needed to be done when first browsing the page
        moms = moms ? moms : 0;

        let total = netto + moms;
        // if total is NaN, make it 0
        // should only be needed to be done when first browsing the page
        total = total ? total : 0;

        await this.setState(previousState => {
            return {
                nettoSum: netto,
                totalSum: total,
                moms: moms,
            }

        });
        this.parentCallback();


    }

    parentCallback = () => {
        this.props.parentCallback(this.state);
    }

    showView = () => {
        try {
            console.log(this.state.rowItems);
            return (<View>
                        {this.state.rowItems.map((item, index) => {
                            return <BoxRow
                                        key={index}
                                        number={item.number}
                                        description='beskrivelsetext'
                                        antal={item.antal}
                                        pris={item.pris}
                                        sum={item.sum}
                                        rabatt={0}
                                        parentCallback={this.sendCallback} />})}
                </View>)
        }
        catch (e) {
            //console.log(e);
        }

    }


    render() {

        return (
            <View>
            {this.showView()}


            </View>
        );
    }



}
