/**
 * Damascus App
 * https://github.com/justchad/deapp
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage,
  Text,
  Image,
  Dimensions,
  View
} from 'react-native';

var s = require('./_global/style');

class Main extends Component {

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  render() {
    
    return (
    <View style={styles.wrapper}>

      <Text>Hello I am the Damascus App.</Text>
    
    </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    alignItems: 'center',
    backgroundColor: 'rgba(250, 243, 223, 1)',
    height: s.height,
    width: s.width,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
});

export default Main
