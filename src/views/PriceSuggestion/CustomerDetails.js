import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';

import globalStyles from '../../styles/globalStyles';
import Checkbox from 'react-native-checkbox';

const t = require('tcomb-form-native');
const Form = t.form.Form;

const _ = require('lodash');

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
const stylesheetRow = _.cloneDeep(t.form.Form.stylesheet);

stylesheetRow.fieldset = {
    flexDirection: 'row',
    justifyContent: 'space-between',
};

stylesheetRow.textbox.normal.color = '#000000';
stylesheetRow.textbox.normal.backgroundColor = '#FFFFFF';
stylesheetRow.textbox.normal.borderColor = '#333333'
stylesheetRow.textbox.normal.borderWidth = 2;
stylesheetRow.textbox.normal.borderRadius = 5;
stylesheetRow.textbox.normal.marginVertical = 10;
stylesheetRow.textbox.normal.paddingVertical = 10;
stylesheetRow.textbox.normal.paddingHorizontal = 15;
stylesheetRow.formGroup.normal.flex = 0.48;
stylesheetRow.textbox.error.color = '#000000';
stylesheetRow.textbox.error.backgroundColor = '#FFFFFF';
stylesheetRow.textbox.error.borderWidth = 2;
stylesheetRow.textbox.error.borderRadius = 5;
stylesheetRow.textbox.error.marginVertical = 10;
stylesheetRow.textbox.error.paddingVertical = 10;
stylesheetRow.textbox.error.paddingHorizontal = 15;
stylesheetRow.formGroup.error.flex = 1;

stylesheet.textbox.normal.color = '#000000';
stylesheet.textbox.normal.backgroundColor = '#FFFFFF';
stylesheet.textbox.normal.borderColor = '#333333'
stylesheet.textbox.normal.borderWidth = 2;
stylesheet.textbox.normal.borderRadius = 5;
stylesheet.textbox.normal.marginVertical = 10;
stylesheet.textbox.normal.paddingVertical = 10;
stylesheet.textbox.normal.paddingHorizontal = 15;
stylesheet.formGroup.normal.flex = 1;
stylesheet.textbox.error.color = '#000000';
stylesheet.textbox.error.backgroundColor = '#FFFFFF';
stylesheet.textbox.error.borderWidth = 2;
stylesheet.textbox.error.borderRadius = 5;
stylesheet.textbox.error.marginVertical = 10;
stylesheet.textbox.error.paddingVertical = 10;
stylesheet.textbox.error.paddingHorizontal = 15;
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


const optionsRow={
    auto: 'none',
    stylesheet: stylesheetRow,
    fields: {
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
    }
};

const options={
    auto: 'none',
    stylesheet: stylesheet,
    fields: {
        company: {
            placeholder: 'Företag',
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
                <View style={styles.sectionContainer}>
                    <Text style={globalStyles.h3}>Faktureringsadress</Text>
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
                    options={optionsRow}
                    />

                    <Form
                    ref='adress'
                    value={this.state.adress}
                    onChange={this.updateAdress}
                    type={Adress}
                    options={optionsRow}
                    />

                    <Form
                    ref='city'
                    value={this.state.city}
                    onChange={this.updateCity}
                    type={City}
                    options={optionsRow}
                    />

                    <Form
                    ref='contact'
                    value={this.state.contact}
                    onChange={this.updateContact}
                    type={Contact}
                    options={optionsRow}
                    />

                    <TouchableOpacity
                    style={styles.button}
                    onPress={this.testFunction}>

                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={styles.row}>
                        <View style={{paddingRight: 80}}>
                            <Text style={globalStyles.h3}>Leveransadress</Text>
                        </View>

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
                        options={optionsRow}
                        />
                        <Form
                        ref='receiverCity'
                        value={this.state.receiverCity}
                        onChange={this.updateReceiverCity}
                        type={City}
                        options={optionsRow}
                        />
                    </View>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: globalStyles.PADDING,
        alignSelf: 'stretch',
    },
    sectionContainer: {
        paddingHorizontal: globalStyles.PADDING,
        paddingBottom: globalStyles.PADDING,
    },
    row: {
        flexDirection: 'row',
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
