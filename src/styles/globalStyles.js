import React from "react-native";
import Dimensions from 'Dimensions';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1 ;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1 ;

// We set our base font size value
const base_unit = 14;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function
function em(value) {
  return unit * value;
}

// Then we set our styles with the help of the em() function
export default globalStyles = {

  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  // PADDING: em(1.25),

  // CARD
  CARD_HEIGHT: (x - em(1.25) * 2) * (3/5),

  // FONT
  FONT_SIZE: em(1),
  h1: {
    fontSize: em(2.571),
    color: '#333333',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  h2: {
    fontSize: em(1.714),
    color: '#333333',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  h3: {
    fontSize: em(1.286),
    color: '#333333',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  h4: {
     fontSize:  em(1.286),
     color: '#333333',
     backgroundColor: 'rgba(0,0,0,0)',
  },
  p: {
    fontSize: em(1),
    color: '#333333',
    backgroundColor: 'rgba(0,0,0,0)',
  },

};
