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

import NumberPresented from '../../components/NumberInput/NumberPresented';
import Checkbox from 'react-native-checkbox';

import globalStyles from '../../styles/globalStyles';
import tcombFormStyle from '../../styles/tcombFormStyle';
import t from 'tcomb-form-native';
import _ from 'lodash';

const Form = t.form.Form;
const stylesheetRow = _.cloneDeep(t.form.Form.stylesheet);

stylesheetRow.fieldset = {
    flexDirection: 'row',
    justifyContent: 'space-between',
};

stylesheetRow.formGroup.normal.flex = 0.48;
stylesheetRow.formGroup.error.flex = 1;

const ShippingForm = t.struct({
    rebateText: t.String,
    shippingText: t.String,
});

const options = {
    auto: 'none',
    stylesheet: stylesheetRow,
    fields: {
        rebateText: {
            placeholder: 'Rabatt på totalsumma (%)',
            error: 'obligatoriskt!'

        },
        shippingText: {
            placeholder: 'Frakt (kr)',
            error: 'obligatoriskt!'
        }
    }
};


export default class Order extends Component {

    // TODO: Loop out BoxRow, save sums in an object in an array in the state
    // {product number: sum}
    constructor(props) {
        super(props);
        this.state = {
            shipping: {
                rebateText: '',
                shippingText: '',
            },
            kranbil: props.propState.kranbil,
            plukket: props.propState.plukket,
            kjorer: props.propState.kjorer,

            rowItems: props.propState.rowItems,

            nettoSum: props.propState.nettoSum,
            moms: props.propState.moms,
            totalSum: props.propState.totalSum,

            date: props.propState.date,
            chosenDate: props.propState.chosenDate,
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
        if (this.props.propState.date === null) {
            await this.setDate();
        }

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

        if(newprops.propState.date == null) {
            await this.setDate();
        }

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

        let date = ""

        date += yyyy + "-"

        if(mm<10) {
            date += '0'+mm.toString() + "-";
        }
        else {
            date += mm.toString() + "-";
        }

        if(dd<10) {
            date += '0'+dd.toString();
        }
        else {
            date += dd.toString();
        }

        return date;
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
        console.log(this.state.chosenDate);
        this.parentCallback();

    }



    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={[styles.borderBottom,{flex:1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: globalStyles.PADDING, paddingBottom: globalStyles.PADDING * 0.5}]}>
                        <View style={{flex: 0.18}}>
                            <Text>NOBBNUMMER</Text>
                        </View>
                        <View style={{flex: 0.25}}>
                            <Text>BESKRIVELSE</Text>
                        </View>
                        <View style={{flex: 0.13}}>
                            <Text>ANTALL</Text>
                        </View>
                        <View style={{flex: 0.13}}>
                            <Text>PRIS</Text>
                        </View>
                        <View style={{flex: 0.13}}>
                            <Text>SUM</Text>
                        </View>
                        <View style={{flex: 0.13}}>
                            <Text>RABATT (%)</Text>
                        </View>
                    </View>
                    <View style={{paddingBottom: globalStyles.PADDING * 0.5}}>
                        <View style={[styles.borderBottom,{paddingVertical: globalStyles.PADDING * 0.5}]}>
                            <ObjectSummarizer
                                propState={this.state}
                                parentCallback={this.sendCallback}
                            />
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flex: 0.92}}>
                            <Form
                            ref="shippingform"
                            value={this.state.shipping}
                            onChange={this.updateShipping}
                            type={ShippingForm}
                            options={options}
                            />
                        </View>
                        <View style={{paddingTop: 10}}>
                          <View style={[styles.discountButton,{justifyContent: 'flex-end', paddingVertical: 4}]}>
                              <Image
                                  style={{height: 21, width: 21}}
                                  source={require('../../images/icons/round-arrow.png')} />
                          </View>
                        </View>
                        <View style={{paddingTop: 10}}>
                          <View style={[styles.discountButton,{justifyContent: 'flex-end', paddingVertical: 4}]}>
                              <Image
                                  style={{height: 21, width: 21}}
                                  source={require('../../images/icons/add.png')} />
                          </View>
                        </View>
                    </View>

                    <View style={[styles.rowSpaceBetween,{paddingTop: globalStyles.PADDiNG}]}>
                        {/* total sum of all above */}
                        <NumberPresented
                            myNumber={this.state.nettoSum}
                            pretext="NETTO"
                            postfix="kr"
                        />
                        {/* 25% of the total sum */}
                        <NumberPresented
                            myNumber={this.state.moms}
                            pretext="MOMS (25%)"
                            postfix="kr"
                        />
                    </View>

                    <View>
                        <NumberPresented
                            myNumber={this.state.totalSum}
                            pretext="SUM"
                            postfix="kr"
                        />
                    </View>

                    <View style={[styles.borderBottom,{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: globalStyles.PADDING*1.5}]}>
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


                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: globalStyles.PADDING*1.5}}>
                        <View style={[styles.borderBottom,{flexDirection: 'row', justifyContent: 'space-between', width: 285}]}>
                            <Text>DATO: </Text>
                            {/* date should not be taken locally (preferrably) as changing the time on the device may cause issues */}
                            <Text>{this.state.date}</Text>

                            <Image
                                style={{height: 11, width: 11}}
                                source={require('./img/arrow.png')} />
                        </View>

                        <View style={[styles.borderBottom,{flexDirection: 'row', justifyContent: 'space-between', width: 285}]}>
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
                             <Image
                                 style={{height: 11, width: 11}}
                                 source={require('./img/arrow.png')} />
                        </View>
                    </View>

                    <View style={styles.textDescription}>
                        <Text>BESKJED:</Text>

                        <TextInput
                            style={{flex: 1}}
                            multiline = {true}
                            numberOfLines = {4}
                            onChangeText={(text) => this.setState(previousState => {
                                return {
                                    beskjed: text
                                }

                            })}
                            value={this.state.beskjed}
                        />
                    </View>


                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                                  paddingBottom: globalStyles.PADDING * 0.6, paddingTop: globalStyles.PADDING}}>
                        <View style={styles.receiptButton}>
                            <Image
                                style={{height: 50, width: 50}}
                                source={require('../../images/save.png')} />
                            <View style={{paddingTop: globalStyles.PADDING * 0.5}}>
                                <Text style={{fontSize: 24}}>Lagre tillbud</Text>
                            </View>
                        </View>
                        <View style={styles.receiptButton}>
                            <Image
                                style={{height: 50, width: 50}}
                                source={require('../../images/printer.png')} />
                            <View style={{paddingTop: globalStyles.PADDING * 0.5}}>
                                <Text style={{fontSize: 24}}>Skriv ut</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingBottom: globalStyles.PADDING,}}>
                        <View style={styles.receiptButton}>
                            <Text style={{fontSize: 24}}>Lagre som PDF</Text>
                        </View>
                        <View style={styles.receiptButton}>
                            <Text style={{fontSize: 24}}>Send PDF med e-post</Text>
                        </View>
                    </View>

                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: globalStyles.PADDING,
        paddingHorizontal: globalStyles.PADDING * 2,
    },
    sectionContainer: {
        paddingBottom: globalStyles.PADDING,
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    borderBottom: {
        borderRadius: 1,
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
    },
    textDescription: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: globalStyles.PADDING,
        borderRadius: 1,
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
    },
    borderBottom: {
        borderRadius: 1,
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
    },
    discountButton: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        backgroundColor: '#F9CE3C',
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    receiptButton: {
        flex: 0.48,
        backgroundColor: '#F9CE3C',
        borderRadius: 10,
        borderColor: '#333333',
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: globalStyles.PADDING * 0.5,
    }
});
