/**
 * Damascus App
 * https://github.com/justchad/deapp
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import NavigationFooter from './NavigationFooter';
import Styles from './Styles';

var {height, width} = Dimensions.get('window');

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    var self = this;

    self.state = {
      emailText : '',
      hasEmail: function() {
        return this.emailText.trim() !== '';
      },
      getResetPasswordButtonStyles: function() {
        return {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 45,
          width: width - 50,
          marginTop: 25,
          borderRadius: 3,
          backgroundColor: this.hasEmail() ? Styles.Colors.CuriousBlue : '#aaa'
        };
      },
      resetPassword: function() {
        console.log(this.emailText)
        // todo reset the users password
        self.navigate('Main');
      }
    };
  }

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  render() {
    return (
      <View style={Styles.Layout.Wrapper}>
        <Image source={require('./_assets/loginBg@2x.png')}
          style={Styles.Layout.Background}>
          <View style={styles.forgotPasswordWrapper}>
            <View style={styles.headerWrapper}>
              <Text style={styles.headerText}>Forget Your Login?</Text>
            </View>
            <View style={styles.instructionsWrapper}>
              <Text style={styles.instructionsText}>
              Enter the email associated with your account to receive your new password.
              </Text>
            </View>
            <View style={styles.textInputWrapper}>
              <TextInput placeholder='Email'
                keyboardType='email-address'
                style={styles.textInput}
                value={this.state.emailText}
                onChangeText={(emailText) => this.setState({emailText})} />
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableHighlight style={this.state.getResetPasswordButtonStyles()}
                onPress={  this.state.hasEmail() ? this.state.resetPassword.bind(this.state) : null }>
                <Text style={styles.resetPasswordButtonText}>Reset My Password</Text>
              </TouchableHighlight>
            </View>
          </View>
          <NavigationFooter navigator={this.props.navigator}
            routeName={'Login'}
            buttonText={'Back To Login'}/>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  forgotPasswordWrapper: {
    alignItems: 'center'
  },
  headerWrapper: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 100
  },
  headerText: {
    color: Styles.Colors.DaintreeLight,
    fontSize: Styles.Typography.h3,
    fontWeight: 'bold'
  },
  instructionsWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 25,
    marginBottom: 25
  },
  instructionsText: {
    color: Styles.Colors.GrannySmithLight,
    width: width - 50
  },
  textInputWrapper: {
    flexDirection: 'row',
    borderBottomColor: Styles.Colors.LightGray,
    borderBottomWidth: 1,
    marginTop: 20
  },
  textInput: {
    alignSelf: 'center',
    height: 25,
    width: width - 50
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetPasswordButtonText: {
    alignSelf: 'center',
    color: Styles.Colors.White,
    fontWeight: 'bold'
  }
});

export default ForgotPassword
