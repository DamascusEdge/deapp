/**
 * Damascus App
 * https://github.com/justchad/deapp
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  AsyncStorage,
  Text,
  View
} from 'react-native';

var s = require('./_global/style');

//Page imports
import Main from './Main';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';


class Damascus extends Component {
  
  //Render method
  renderScene(route, navigator){
    //Use if not switch here
    if (route.name == 'Main') {
        return <Main navigator={navigator} />
    }
    if (route.name == 'Login') {
				return <Login navigator={navigator} />
		}
		if (route.name == 'SignUp') {
				return <SignUp navigator={navigator} />
		}
		if (route.name == 'ForgotPassword') {
				return <ForgotPassword navigator={navigator} />
		}
  }
  
  render() {
   
    return (
      
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'Login'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  
});

AppRegistry.registerComponent('Damascus', () => Damascus);
