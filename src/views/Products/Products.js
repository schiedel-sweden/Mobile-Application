import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

export default class Products extends Component {

  render() {
      console.log('start');
      const url = 'https://api.dev/api/excel/12';
      console.log(url);
      axios.request(url)
      .then((response) => {
          console.log(response);
          console.log('hej bög');
      })
      .catch(function (error) {
          console.log(error);
          console.log('då');
      });
      console.log('stop');

    return (
        <View style={styles.container}>
            <Text>Hej</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 30,
    },
});
