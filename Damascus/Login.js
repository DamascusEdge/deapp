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
  AsyncStorage,
  Text,
  Image,
  Dimensions,
  View,
  TextInput
} from 'react-native';
import PasswordInput from './PasswordInput';
import Styles from './Styles';
import com.brentvatne.react.ReactVideoPackage;
var {height, width} = Dimensions.get('window');

class Login extends Component {

  constructor(props) {
    super(props);
    var self = this;

    self.state = {
      emailText: '',
      passwordText: '',
      hasCredentials: function() {
        return this.emailText.trim() !== '' && this.passwordText.trim() !== '';
      },
      getLoginBtnStyles: function() {
        return {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 45,
          width: width - 50,
          marginTop: 25,
          borderRadius: 3,
          backgroundColor: this.hasCredentials() ? Styles.Colors.CuriousBlue : '#aaa'
        };
      },
      login: function() {
        console.log(this.emailText, this.passwordText)
        // todo authenticate this.emailText and this.passwordText
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
    <Video source={{uri: "./_assets/video-blacksmith"}} // Can be a URL or a local file. 
       rate={1.0}                   // 0 is paused, 1 is normal. 
       volume={1.0}                 // 0 is muted, 1 is normal. 
       muted={false}                // Mutes the audio entirely. 
       paused={false}               // Pauses playback entirely. 
       resizeMode="cover"           // Fill the whole screen at aspect ratio. 
       repeat={true}                // Repeat forever. 
       onLoadStart={this.loadStart} // Callback when video starts to load 
       onLoad={this.setDuration}    // Callback when video loads 
       onProgress={this.setTime}    // Callback every ~250ms with currentTime 
       onEnd={this.onEnd}           // Callback when playback finishes 
       onError={this.videoError}    // Callback when video cannot be loaded 
       style={styles.backgroundVideo} />
       
      <Image source={require('./_assets/loginBg@2x.png')}
        style={styles.backgroundImg}>
        <View style={styles.contentWrapper}>
          <Image source={require('./_assets/brandSig.png')}
            style={styles.logoImg} />
          <View style={styles.textInputWrapper}>
            <TextInput placeholder='Email'
              keyboardType='email-address'
              style={styles.textInput}
              value={this.state.emailText}
              onChangeText={(emailText) => this.setState({emailText})} />
          </View>
          <PasswordInput setPasswordText={(passwordText) => this.setState({passwordText})} />
          <View style={styles.buttonWrapper}>
            <TouchableHighlight style={this.state.getLoginBtnStyles()}
              onPress={  this.state.hasCredentials() ? this.state.login.bind(this.state) : null }>
              <Text style={styles.loginBtnText}>Login</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.otherOptionsWrapper}>
            <TouchableHighlight style={styles.col}
              onPress={ this.navigate.bind(this, 'SignUp') }>
              <Text style={styles.otherOptionsText}>
                Sign Up Here
              </Text>
            </TouchableHighlight>
            <Text style={[styles.otherOptionsText,styles.otherOptionsTextSplitter]}>
            |
            </Text>
            <TouchableHighlight style={styles.col}
              onPress={ this.navigate.bind(this, 'ForgotPassword') }>
            <Text style={styles.otherOptionsText}>
              Forgot Password
            </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Image>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  col: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  wrapper: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover'
  },
  contentWrapper: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 0,
    width: width,
  },
  logoImg: {
    flexDirection: 'row',
    marginTop: 75,
    marginBottom: 10,
    width: 178,
    height: 165
  },
  textInputWrapper: {
    flexDirection: 'row',
    borderBottomColor: Styles.Colors.LightGray,
    borderBottomWidth: 1,
    marginTop: 20,
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
  loginBtnText: {
    alignSelf: 'center',
    color: Styles.Colors.White,
    fontWeight: 'bold'
  },
  otherOptionsWrapper: {
    flexDirection: 'row',
    marginTop: 25
  },
  otherOptionsText: {
    color: '#aaa',
    fontSize: Styles.Typography.h6
  },
  otherOptionsTextSplitter: {
    flexDirection: 'column',
    marginHorizontal: 3
  }
});

export default Login
