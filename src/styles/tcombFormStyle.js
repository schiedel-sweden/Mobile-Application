'use strict'
import React from 'react-native';
import {
    StyleSheet,
} from 'react-native';
const t = require('tcomb-form-native');

// stylesheet overriding
t.form.Form.stylesheet.textbox.normal.color = '#000000';
t.form.Form.stylesheet.textbox.normal.backgroundColor = '#FFFFFF';
t.form.Form.stylesheet.textbox.normal.borderColor = '#333333'
t.form.Form.stylesheet.textbox.normal.borderWidth = 2;

t.form.Form.stylesheet.textbox.normal.borderRadius = 5;

t.form.Form.stylesheet.textbox.normal.marginVertical = 10;
t.form.Form.stylesheet.textbox.normal.paddingVertical = 10;
t.form.Form.stylesheet.textbox.normal.paddingHorizontal = 15;

t.form.Form.stylesheet.textbox.error.color = '#000000';
t.form.Form.stylesheet.textbox.error.backgroundColor = '#FFFFFF';
t.form.Form.stylesheet.textbox.error.borderWidth = 2;

t.form.Form.stylesheet.textbox.error.borderRadius = 5;
t.form.Form.stylesheet.textbox.error.marginVertical = 10;
t.form.Form.stylesheet.textbox.error.paddingVertical = 10;
t.form.Form.stylesheet.textbox.error.paddingHorizontal = 15;
