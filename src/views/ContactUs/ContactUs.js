import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Linking,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import Header from '../../components/Header/Header';
import globalStyles from '../../styles/globalStyles';
import tcombFormStyle from '../../styles/tcombFormStyle';

import Communications from 'react-native-communications';


const t = require('tcomb-form-native');
const Form = t.form.Form;
const _ = require('lodash');
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
const stylesheetMultiLine = _.cloneDeep(t.form.Form.stylesheet);

const ContactForm = t.struct({
    name: t.String,
    email: t.String
});
const Message = t.struct({
    message: t.String
});


// stylesheet overriding
stylesheetMultiLine.textbox.normal.height = 300;
stylesheetMultiLine.textbox.error.height = 300;



// borderRadius: 5,
// borderWidth: 2,
// borderColor: '#333333',
// paddingVertical: 10,
// paddingHorizontal: 15,
// backgroundColor: '#ffffff',
// marginVertical: 10,

const options = {
    auto: 'none',
    fields: {
        name: {
            placeholder: 'Ditt namn',
            error: 'obligatoriskt!'

        },
        email: {
            placeholder: 'Din e-mail',
            error: 'obligatoriskt!'
        }
    }
};
const optionsMultiline = {
    auto: 'none',
    stylesheet: stylesheetMultiLine,
    fields: {
        message: {
            multiline: true,
            numberOfLines: 10,
            placeholder: 'Ditt meddelande',
            error: 'obligatoriskt!'
        }
    }
};

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
        this.checkName = this.checkName.bind(this);
        this.state = {
            name: '',
            email: '',
            message: '',
            empty: '',
            ingress: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        };
    }
    handlePress() {
        let value = this.refs.contactform.getValue();
        if (value != null) {
            alert(value.name + " " +value.email +" " + value.message);
        }
    }

    checkName(){
        let a = this.refs.contactform.getComponent('name').getValue();
        if (a != null) {

            this.refs.contactform.getComponent('name').color = '#00FF00';
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Header />
                <KeyboardAvoidingView behavior="padding" style={styles.body}>
                    <View style={styles.headerContainer}>
                        <View style={styles.headerTitle}>
                            <Text style={globalStyles.h2}>Kontakta oss</Text>
                        </View>
                        <View style={styles.headerIngress}>
                            <Text style={globalStyles.p}>
                                {this.state.ingress}
                            </Text>
                        </View>
                    </View>

                    <Form
                    ref="contactform"
                    style={styles.input}
                    onChange={this.checkName}
                    type={ContactForm}
                    options={options}
                    />
                    <Form
                    ref="message"
                    style={styles.input}
                    onChange={this.checkName}
                    type={Message}
                    options={optionsMultiline}
                    />
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity
                            onPress={this.handlePress}
                            style={styles.button} >
                            <Text>Skicka!</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerWrapper}>
                        <View>
                            <Image
                            style={styles.largerIcons}
                            source={require('../../images/icons/pin.png')}
                             />
                             <TouchableOpacity onPress={() => Linking.openURL('https://goo.gl/maps/CQu8tnGAzBL2')} >
                             <Text>E A rosgrens gata 2z</Text>
                             <Text>421 31 Västra Frölunda</Text>
                             </TouchableOpacity>


                        </View>
                        <View>
                            <Image style={styles.largerIcons}
                            source={require('../../images/icons/kontakt.png')}
                            />
                            <TouchableOpacity onPress={() => Communications.phonecall('013107050', true)} >
                            <Text style={styles.yellow}>013 - 10 70 50</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image
                            style={styles.largerIcons}
                            source={require('../../images/icons/email.png')}
                            />
                            <TouchableOpacity onPress={() => Communications.email('info@schiedel.se', '', '', '', '')} >
                                <Text style={styles.yellow}>info@schiedel.se</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B9B9B9',
    },
    body: {
        padding: globalStyles.PADDING*2,
    },
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        marginBottom: globalStyles.PADDING,
    },
    headerIngress: {
        marginBottom: globalStyles.PADDING,
    },
    input: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        marginVertical: 10,
    },
    textAria: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#333333',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        marginVertical: 10,
    },
    buttonWrapper: {
        justifyContent: 'flex-end',
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
    footerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 30,
    },
    icon: {
        width: 24,
        height: 24,
    },
    largerIcons: {
        width: 48,
        height: 48,
    },
    yellow: {
        color: '#F9CE3C',
    }
});
