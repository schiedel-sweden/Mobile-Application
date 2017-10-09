import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';

const t = require('tcomb-form-native');
const Form = t.form.Form;

const _ = require('lodash');

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.fieldset = {
    flexDirection: 'row'
};

stylesheet.formGroup.normal.flex = 1;
stylesheet.formGroup.error.flex = 1;

// top forms

const Company = t.struct({
    company: t.String,
});

const Name = t.struct({
    name: t.String,
    surname: t.String,
});

const Adress = t.struct({
    adress: t.String,
    postnumber: t.Number,
});

const City = t.struct({
    city: t.String,
    country: t.String,
});

const Contact = t.struct({
    phone: t.Number,
    email: t.String,
})



const Delivery = t.struct({
    sameAsAbove: t.Boolean,
    receiver: t.String,
    adress: t.String,
    postnumber: t.Number,
    city: t.String,
    country: t.String
})

// bottom forms'

const Receiver = t.struct({
    receiver: t.String,
})

// Adress, same as above!

// city, same as above!




const options={
    auto: 'none',
    stylesheet: stylesheet,
    fields: {
        company: {
            placeholder: 'Företag',
            error: 'Obligatoriskt!',
        },
        name: {
            placeholder: 'Förnamn',
            error: 'Obligatoriskt!',
        },
        surname: {
            placeholder: 'Efternamn',
            error: 'Obligatoriskt!',
        },
        adress: {
            placeholder: 'Adress',
            error: 'Obligatoriskt!',
        },
        postnumber: {
            placeholder: 'Postnummer',
            error: 'Obligatoriskt!',
        },
        city: {
            placeholder: 'Stad',
            error: 'Obligatoriskt!',
        },
        country: {
            placeholder: 'Land',
            error: 'Obligatoriskt!',
        },
        phone: {
            placeholder: 'Telefonnummer',
            error: 'Obligatoriskt!',
        },
        email: {
            placeholder: 'E-post',
            error: 'Obligatoriskt!',
        },
        receiver: {
            placeholder: 'Mottagare',
            error: 'Obligatoriskt!',
        },

    }

};
export default class CustomerDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            company: '',
            name: '',
            surname: '',
            adress: '',
            postnumber: '',
            city: '',
            country: '',
            phone: '',
            email: '',

            receiver: '',
            receiverAdress: '',
            receiverPostnumber: '',
            receiverCity: '',
            receiverCountry: '',

            checked: false,

        }

        this.onPress = this.onPress.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.changeState = this.changeState.bind(this);
    }



    onToggle() {

        if (!this.state.checked) {
            this.setState({
                receiver: '',
                receiverAdress: '',
                receiverPostnumber: '',
                receiverCity: '',
                receiverCountry: '',
            });
        }
        else {
            this.setState({
                receiver: this.state.company,
                receiverAdress: this.state.adress,
                receiverPostnumber: this.state.postnumber,
                receiverCity: this.state.city,
                receiverCountry: this.state.country,
            });

        }

        this.setState({
            checked: !this.state.checked,
        });

    }


    onPress() {
        let re = /(\w\.)*(\w)+\@((\w\.)+(\w)+)/g;
        let company = this.refs.company.getValue();
        let name = this.refs.name.getValue();
        let addr = this.refs.adress.getValue();
        let city = this.refs.city.getValue();
        let contact = this.refs.contact.getValue();

        // check that nothing is null
        if (company != null && name != null && addr != null &&
            city != null && contact != null){

            this.setState({
                company: company.company,
                name : name.name,
                surname : name.surname,
                adress: addr.adress,
                postnumber: addr.postnumber,
                city: city.city,
                country: city.country,
                phone: contact.phone,
                email: contact.email,

            });
        }
        if (re.test(contact.email.toString())) {
            alert('ok!');
        }
        else {
            alert('no ok!');
        }
    }

    changeState(item) {
        switch (item) {

            case 'company':
                let val = this.refs.company.getValue();

                if (val != null) {
                    let prev = this.state.company;

                    this.setState({
                        company: val.company,
                    });

                    alert(this.state.company);

                }
                break;
            case 'name':
                val = this.refs.name.getValue();
                if (val != null) {
                    this.setState({
                        name: val.name,
                        surname: val.surname
                    });
                }
                break;
            case 'adress':
                val = this.refs.adress.getValue();
                if (val != null) {
                    this.setState({
                        adress: val.adress,
                        postnumber: val.postnumber
                    });
                }
                break;
            case 'city':
                val = this.refs.city.getValue();
                if (val != null) {
                    this.setState({
                        city: val.city,
                        country: val.country
                    });
                }
                break;
            case 'contact':
                val = this.refs.contact.getValue();
                if (val != null) {
                    this.setState({
                        phone: val.phone,
                        email: val.email
                    })
                }
                break;
            default:
                break;

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Faktureringsadress</Text>
                    <Form
                    ref='company'
                    onChangeText={() => this.changeState('company')}
                    type={Company}
                    options={options}
                    />

                    <Form
                    ref='name'
                    onChangeText={() => this.changeState('name')}
                    type={Name}
                    options={options}
                    />

                    <Form
                    ref='adress'
                    onChangeText={() => this.changeState('adress')}
                    type={Adress}
                    options={options}
                    />

                    <Form
                    ref='city'
                    onChangeText={() => this.changeState('city')}
                    type={City}
                    options={options}
                    />

                    <Form
                    ref='contact'
                    onChangeText={() => this.changeState('contact')}
                    type={Contact}
                    options={options}
                    />

                </View>
                <TouchableOpacity
                style={styles.button}
                onPress={this.onPress}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                <View>
                    <Text>Leveransadress</Text>


                    <TouchableOpacity
                    onPress={this.onToggle}>
                        <Image
                        style={styles.icon}
                        source={this.state.checked ? require('../../images/icons/cross.png') : require('../../images/icons/email.png') } />
                    </TouchableOpacity>


                    <Text>Samma som Faktureringsadress</Text>
                </View>
                <View>
                    <Form
                    ref='receiver'
                    type={Receiver}
                    options={options}
                    />
                    <Form
                    ref='receiverAdress'
                    type={Adress}
                    options={options}
                    />
                    <Form
                    ref='receiverCity'
                    type={City}
                    options={options}
                    />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
    button: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        paddingVertical: 12,
        paddingHorizontal: 17,
        backgroundColor: '#F9CE3C',
        marginVertical: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: 24,
        width: 24,
    }
})
