/**
 * Damascus App
 * https://github.com/justchad/deapp
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Styles from './Styles';

var {height, width}     = Dimensions.get('window');

class NavigationFooter extends Component {
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  render() {
    return (
      <View style={styles.footer}>
        <TouchableHighlight style={styles.footerButton}
          onPress={ this.navigate.bind(this, this.props.routeName) }>
          <Text style={styles.footerText}>{this.props.buttonText}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: width
  },
  footerButton: {
    height: 60,
    borderTopColor: Styles.Colors.LightGray,
    borderTopWidth: 2,
  },
  footerText: {
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#858585'
  }
});

export default NavigationFooter
