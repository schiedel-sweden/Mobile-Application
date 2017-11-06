import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';

import Checkbox from 'react-native-checkbox';

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
            // "top" form
            company: {
                company: '',
            },
            name: {
                name: '',
                surname: '',
            },
            adress: {
                adress: '',
                postnumber: null,
            },
            city: {
                city: '',
                country: '',
            },
            contact: {
                phone: null,
                email: '',
            },

            // "bottom" form
            receiver: {
                receiver: '',
            },
            receiverAdress: {
                adress: '',
                postnumber: null,
            },
            receiverCity: {
                city: '',
                country: '',
            },

            checked: false,

        }
        // update states of top form
        this.updateCompany = this.updateCompany.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateAdress = this.updateAdress.bind(this);
        this.updateCity = this.updateCity.bind(this);
        this.updateContact = this.updateContact.bind(this);
        // update states of bottom form
        this.updateReceiver = this.updateReceiver.bind(this);
        this.updateReceiverAdress = this.updateReceiverAdress.bind(this);
        this.updateReceiverCity = this.updateReceiverCity.bind(this);
        // checkbox that changes the bottom form to be the same information
        // as the top form
        this.changeStates = this.changeStates.bind(this);
    }
    componentWillMount = () => {
        this.setState({
            company: this.props.propState.company,
            name: this.props.propState.name,
            adress: this.props.propState.adress,
            city: this.props.propState.city,
            contact: this.props.propState.contact,

            receiver: this.props.propState.receiver,
            receiverAdress: this.props.propState.receiverAdress,
            receiverCity: this.props.propState.receiverCity,
            checked: this.props.propState.checked,
        });
    }
    componentWillReceiveProps = (newprops) => {
        this.setState({
            company: newprops.propState.company,
            name: newprops.propState.name,
            adress: newprops.propState.adress,
            city: newprops.propState.city,
            contact: newprops.propState.contact,

            receiver: newprops.propState.receiver,
            receiverAdress: newprops.propState.receiverAdress,
            receiverCity: newprops.propState.receiverCity,
            checked: newprops.propState.checked,
        });
    }

    callback = () => {
        this.props.parentCallback(this.state);
    }

    async updateCompany(value) {
        try {
            if(this.state.checked) {
                await this.setState({
                    receiver:{
                        receiver: value.company,
                    },
                });
            }
            await this.setState({
                company: value,
            });
            this.callback();
        }
        catch (error) {
            console.log(error);
        }



    }
    async updateName(value) {
        try {
            await this.setState({
                name: value,
            });
            this.callback();
        }
        catch (error) {
            console.log(error);
        }


    }
    async updateAdress(value) {
        try {
            if(this.state.checked) {
                await this.setState({
                    receiverAdress: value,
                });
            }
            await this.setState({
                adress: value,
            });
            this.callback();
        }
        catch (error) {
            console.log(error);
        }

    }
    async updateCity(value) {
        try {
            if(this.state.checked) {
                await this.setState({
                    receiverCity: value,
                });
            }
            await this.setState({
                city: value,
            });
            this.callback();
        }
        catch (error) {
            console.log(error);
        }

    }
    async updateContact(value) {
        try {
            await this.setState({
                contact: value,
            });
            this.callback();
        }
        catch (error) {
            console.log(error);
        }

    }

    async updateReceiver(value) {
        try {
            await this.setState({
                receiver: value,
            });
            this.callback();
        }
        catch(error) {
            console.log(error);
        }

    }
    async updateReceiverAdress(value) {
        try {
            await this.setState({
                receiverAdress: value,
            });
            this.callback();
        }
        catch (error) {
            console.log(error);
        }

    }
    async updateReceiverCity(value) {
        try {
            await this.setState({
                receiverCity: value,
            });
            this.callback();
        }
        catch (error) {
            console.log(error);
        }

    }


    async changeStates(checked) {

        try {
            if (!checked) {
                await this.setState({
                    receiver: { receiver: this.state.company.company},
                    receiverAdress: this.state.adress,
                    receiverCity: this.state.city,
                });
            }
            else {
                await this.setState({
                    receiver: {receiver: '',},
                    receiverAdress: {adress: '', postnumber: null},
                    receiverCity: {city: '', country: ''},
                });
            }

            await this.setState({
                checked: !this.state.checked,
            });
            this.callback();

        }
        catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Faktureringsadress</Text>
                    <Form
                    ref='company'
                    value={this.state.company}
                    onChange={this.updateCompany}
                    type={Company}
                    options={options}
                    />

                    <Form
                    ref='name'
                    value={this.state.name}
                    onChange={this.updateName}
                    type={Name}
                    options={options}
                    />

                    <Form
                    ref='adress'
                    value={this.state.adress}
                    onChange={this.updateAdress}
                    type={Adress}
                    options={options}
                    />

                    <Form
                    ref='city'
                    value={this.state.city}
                    onChange={this.updateCity}
                    type={City}
                    options={options}
                    />

                    <Form
                    ref='contact'
                    value={this.state.contact}
                    onChange={this.updateContact}
                    type={Contact}
                    options={options}
                    />


                </View>

                <TouchableOpacity
                style={styles.button}
                onPress={this.testFunction}>

                    <Text>Submit</Text>
                </TouchableOpacity>

                <View>
                    <Text>Leveransadress</Text>


                    <Checkbox
                    label="Samma som faktureringsadress"
                    checked={this.state.checked}
                    checkboxStyle={this.state.checked ? {backgroundColor: "#F9CE3C",} : {backgroundColor: "#FFFFFF"}}
                    onChange={() => this.changeStates(this.state.checked)}/>

                </View>
                <View>
                    <Form
                    ref='receiver'
                    value={this.state.receiver}
                    onChange={this.updateReceiver}
                    type={Receiver}
                    options={options}
                    />

                    <Form
                    ref='receiverAdress'
                    value={this.state.receiverAdress}
                    onChange={this.updateReceiverAdress}
                    type={Adress}
                    options={options}
                    />
                    <Form
                    ref='receiverCity'
                    value={this.state.receiverCity}
                    onChange={this.updateReceiverCity}
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
