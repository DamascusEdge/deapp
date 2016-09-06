'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  Image,
  Dimensions,
  View,
  TextInput,
  ScrollView
} from 'react-native';
import NavigationFooter from './NavigationFooter';
import PasswordInput from './PasswordInput';
import Styles from './Styles';
var {height, width} = Dimensions.get('window');

class SignUp extends Component {

  constructor(props) {
    super(props);
    var self = this;
    var _hidePassword = true;

    self.state = {
      firstNameText: '',
      lastNameText: '',
      emailText: '',
      passwordText: '',
      hasRequiredFields: function() {
        return this.firstNameText.trim() !== ''
          && this.lastNameText.trim() !== ''
          && this.emailText.trim() !== ''
          && this.passwordText.trim() !== '';
      },
      getSignUpButtonStyles: function() {
        return {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 45,
          width: width - 50,
          marginTop: 25,
          borderRadius: 3,
          backgroundColor: this.hasRequiredFields() ? Styles.Colors.CuriousBlue : '#aaa'
        };
      },
      signUp: function() {
        console.log(this.firstNameText, this.lastNameText, this.emailText, this.passwordText)
        // todo register user and log them in?
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
      <View style={styles.wrapper}>
        <Image source={require('./_assets/loginBg@2x.png')}
          style={styles.backgroundImg}>
          <View style={styles.signUpFormWrapper}>
            <View style={styles.headerWrapper}>
              <Text style={styles.headerText}>New User Registration</Text>
            </View>
            <View style={styles.textInputWrapper}>
              <TextInput placeholder='First Name'
                keyboardType='default'
                style={styles.textInput}
                value={this.state.firstNameText}
                onChangeText={(firstNameText) => this.setState({firstNameText})} />
            </View>
            <View style={styles.textInputWrapper}>
              <TextInput placeholder='Last Name'
                keyboardType='default'
                style={styles.textInput}
                value={this.state.lastNameText}
                onChangeText={(lastNameText) => this.setState({lastNameText})} />
            </View>
            <View style={styles.textInputWrapper}>
              <TextInput placeholder='Email'
                keyboardType='email-address'
                style={styles.textInput}
                value={this.state.emailText}
                onChangeText={(emailText) => this.setState({emailText})} />
            </View>
            <PasswordInput setPasswordText={(passwordText) => this.setState({passwordText})} />
            <View style={styles.buttonWrapper}>
              <TouchableHighlight style={this.state.getSignUpButtonStyles()}
                onPress={  this.state.hasRequiredFields() ? this.state.signUp.bind(this.state) : null }>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
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
  wrapper: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImg: {
    resizeMode: 'cover'
  },
  signUpFormWrapper: {
    marginTop: 25,
    alignItems: 'center',
    width: width
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
  textInputWrapper: {
    flexDirection: 'row',
    borderBottomColor: Styles.Colors.LightGray,
    borderBottomWidth: 1,
    marginTop: 20,
  },
  textInput: {
    height: 25,
    width: width - 50
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    alignSelf: 'center',
    color: Styles.Colors.White,
    fontWeight: 'bold'
  },
});

export default SignUp
