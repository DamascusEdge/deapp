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
  Switch,
  Text,
  TextInput,
  View
} from 'react-native';
import Styles from './Styles';
var {height, width} = Dimensions.get('window');

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    var self = this;

    self.state = {
      showPassword: false
    }
  }

  render() {
    return (
      <View style={styles.passwordWrapper}>
        <View style={styles.passwordTextInputWrapper}>
          <TextInput placeholder='Password'
            placeholderTextColor = '#858585'
            keyboardType='default'
            password={!this.state.showPassword}
            style={styles.passwordTextInput}
            value={this.props.passwordText}
            onChangeText={(passwordText) => this.props.setPasswordText(passwordText)} />
        </View>
        <View style={styles.passwordVisibilityWrapper}>
          <Text style={styles.passwordVisibilityText}>{this.state.showPassword ? 'Hide' : 'Show'}</Text>
          <Switch style={styles.passwordVisibilitySwitch}
            onValueChange={(value) => this.setState({ showPassword: value })}
            value={this.state.showPassword}></Switch>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  passwordWrapper: {
    flexDirection: 'row',
    marginTop: 15
  },
  passwordTextInputWrapper: {
    flexDirection: 'column',
    borderBottomColor: '#858585',
    borderBottomWidth: 1,
    marginTop: 5,
    alignSelf: 'flex-start',
    width: width - 100
  },
  passwordTextInput: {
    marginTop: 10,
    height: 25,
    width: width - 100,
    color: '#CCC'
  },
  passwordVisibilityWrapper: {
    flexDirection: 'column',
    width: 50
  },
  passwordVisibilityText: {
    color: '#aaa',
    fontSize: 8,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  passwordVisibilitySwitch: {
    flexDirection: 'row',
  }
});

export default PasswordInput
