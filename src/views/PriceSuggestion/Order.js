import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    TextInput
} from 'react-native';

import BoxRow from '../../components/GridBoxes/BoxRow';
import ObjectSummarizer from '../../components/ObjectSummarizer/ObjectSummarizer';
import DatePicker from 'react-native-datepicker';

import Checkbox from 'react-native-checkbox';


export default class Order extends Component {

    // TODO: Loop out BoxRow, save sums in an object in an array in the state
    // {product number: sum}
    constructor(props) {
        super(props);
        this.state = {
            rebateText: 'Rabatt på totapbeløp',
            shippingText: 'Frakt (kr)',

            kranbil: props.propState.kranbil,
            plukket: props.propState.plukket,
            kjorer: props.propState.kjorer,

            rowItems: props.propState.rowItems,

            nettoSum: props.propState.nettoSum,
            moms: props.propState.moms,
            totalSum: props.propState.totalSum,

            date: props.propState.date,
            chosenDate: props.propState.date,
        }
    }

    componentWillMount = async () => {
        await this.setState({
            rowItems: this.props.propState.rowItems,

            kranbil: this.props.propState.kranbil,
            plukket: this.props.propState.plukket,
            kjorer: this.props.propState.kjorer,

            nettoSum: this.props.propState.nettoSum,
            moms: this.props.propState.moms,
            totalSum: this.props.propState.totalSum,

            date: this.props.propState.date,
            chosenDate: this.props.propState.chosenDate,

        });
        await this.setDate();

        this.parentCallback();
    }


    componentWillReceiveProps = async (newprops) => {
        await this.setState({
            rowItems: newprops.propState.rowItems,

            kranbil: newprops.propState.kranbil,
            plukket: newprops.propState.plukket,
            kjorer: newprops.propState.kjorer,

            nettoSum: newprops.propState.nettoSum,
            moms: newprops.propState.moms,
            totalSum: newprops.propState.totalSum,

            date: newprops.propState.date,
            chosenDate: newprops.propState.chosenDate,

        });
        await this.setDate();

        this.parentCallback();
    }
    setDate = () => {
        let date = this.getDate();
        this.setState({
            date: date,
            chosenDate: date,
        })
    }

    // make function get date from API preferrably!
    getDate = () => {
        let today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth() + 1;
        const yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        today = ''+ yyyy + '-' + mm + '-' + dd;
        return today;
    }

    sendCallback = async (rowItems) => {
        await this.setState({
            rowItems: rowItems.rowItems
        });
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

    checkBoxCallback = async (type) => {
        switch (type) {
            case "kranbil":
                await this.setState({kranbil: !this.state.kranbil});
                this.parentCallback();
                break;
            case "plukket":
                await this.setState({plukket: !this.state.plukket});
                this.parentCallback();
                break;
            case "kjorer":
                await this.setState({kjorer: !this.state.kjorer});
                this.parentCallback();
                break;

        }
    }

    dateCallback = async (date) => {
        await this.setState({chosenDate: date});
        this.parentCallback();

    }



    render() {
        return (
            <View>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>NOBBNUMMER</Text>

                    <Text>BESKRIVELSE</Text>

                    <Text>ANTALL</Text>

                    <Text>PRIS</Text>

                    <Text>SUM</Text>

                    <Text>RABATT (%)</Text>
                </View>

                <ObjectSummarizer
                    propState={this.state}
                    parentCallback={this.sendCallback} />

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                    <TextInput
                        style={{flex: 1, backgroundColor: "#d3d3d3"}}
                        onChangeText={(text) => this.setState({rebateText: text})}
                        value={this.state.rebateText}
                        />

                    <TextInput
                        style={{flex: 1, backgroundColor: "#d3d3d3"}}
                        onChangeText={(text) => this.setState({shippingText: text})}
                        value={this.state.shippingText}
                        />
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>NETTO</Text>
                        {/* total sum of all above */}
                        <Text>{this.state.nettoSum}</Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>MOMS (25%)</Text>
                        {/* 25% of the total sum */}
                        <Text>{this.state.moms}</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>SUM</Text>
                        {/* total sum of all above */}
                        <Text>{this.state.totalSum}</Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Checkbox
                        label="Leveres med kranbil"
                        checked={this.state.kranbil}
                        checkboxStyle={this.state.kranbil ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                        onChange={() => this.checkBoxCallback("kranbil")} />

                    <Checkbox
                        label="Plukket"
                        checked={this.state.plukket}
                        checkboxStyle={this.state.plukket ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                        onChange={() => this.checkBoxCallback("plukket")} />

                    <Checkbox
                        label="Kjører"
                        checked={this.state.kjorer}
                        checkboxStyle={this.state.kjorer ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                        onChange={() => this.checkBoxCallback("kjorer")} />

                </View>


                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Text>DATO: </Text>
                        {/* date should not be taken locally (preferrably) as changing the time on the device may cause issues */}
                        <Text>{this.state.date}</Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Text>Ønsket leveringsdato: </Text>
                        {/* how much is minimum allowed choice?  */}
                        {/* Set minDate another date set to maybe 2 weeks ahead? no idea! */}
                        {/* what to set maxDate to? */}
                        <DatePicker
                            style={{width: 200}}
                            date={this.state.chosenDate}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate={this.state.date}
                            maxDate="2020-12-31"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                              dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                              },
                              dateInput: {
                                marginLeft: 36
                              }
                              // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.dateCallback(date)}}
                         />

                    </View>

                </View>

                <View>
                    <Text>BESKJED</Text>

                    <TextInput
                        style={{flex: 1, backgroundColor: "#d3d3d3"}}
                        onChangeText={(text) => this.setState({beskjed: text})}
                        value={this.state.beskjed}
                        />
                </View>


                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                    <View>
                        <Image
                            style={{height: 250, width: 250, backgroundColor: '#F9CE3C', borderRadius: 10, borderColor: '#000', borderWidth: 5,}}
                            source={require('../../images/save.png')} />
                    </View>

                    <View>
                        <Image
                            style={{height: 250, width: 250, backgroundColor: '#F9CE3C', borderRadius: 10, borderColor: '#000', borderWidth: 5,}}
                            source={require('../../images/printer.png')} />
                    </View>


                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>

                    <View style={{backgroundColor: '#F9CE3C', borderRadius: 10, borderColor: '#000', borderWidth: 5, }}>
                        <Text style={{fontSize: 24}}>Lagre som PDF</Text>
                    </View>

                    <View style={{backgroundColor: '#F9CE3C', borderRadius: 10, borderColor: '#000', borderWidth: 5, }}>
                        <Text style={{fontSize: 24}}>Send PDF med e-post</Text>
                    </View>


                </View>



            </View>

        );
    }
}
