import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

const t = require('tcomb-form-native');
const Form = t.form.Form;


const Invoice = t.struct({
  company: t.String,
  name: t.String,
  surname: t.String,
  adress: t.String,
  postnumber: t.Number,
  city: t.String,
  country: t.String,
  phone: t.Number,
  email: t.String
});

const Delivery = t.struct({
    sameAsAbove: t.Boolean,
    receiver: t.String,
    adress: t.String,
    postnumber: t.Number,
    city: t.String,
    country: t.String
})


const options={};
export default class CustomerDetails extends Component {

    onPress() {
        let val = this.refs.form.getValue();
        if (val) { // null if validation fails
            console.log(val);
        }
    }

    render() {
        return (
            <View>
                <View>
                    <Text>Faktureringsadress</Text>
                    <Form
                    ref="form"
                    type={Invoice}
                    options={options}
                    />
                </View>
                <TouchableOpacity
                onPress={this.onPress}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                <View>
                    <Form
                    ref="second"
                    type={Delivery}
                    options={options}
                    />
                </View>
            </View>

        );
    }
}
