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
  View
} from 'react-native';

//Dimensions and Calculated Heights

var {height, width}     = Dimensions.get('window');
var headerHeight        = 85 - 1;
var footerHeight        = 70 - 1;
var calculatedHeight    = height - headerHeight - footerHeight;
var contentHeight       = calculatedHeight;
var divider             = 50;
var paddedWidth         = width - 20;

//Colors and Color Sets

//Color Pallete
var baseColor           = "'rgba(0,159,183,1)'";
var secondaryColor      = "'rgba(39,39,39,1)'";
var tertiaryColor       = "'rgba(254,215,102,1)'";
var light               = "'rgba(239,241,243,1)'";
var dark                = "'rgba(105,103,115,1)'";
var gray                = "'rgba(39,39,39,0.2)'";
//Dark Set
var baseTextDark        = "'rgba(0,0,0,1)'";
var primaryTextDark     = "'rgba(0,0,0,0.87)'";
var secondaryTextDark   = "'rgba(0,0,0,0.54)'";
var disabledTextDark    = "'rgba(0,0,0,0.38)'";
var dividersDark        = "'rgba(0,0,0,0.12)'";
var iconsActiveDark     = "'rgba(0,0,0,0.54)'";
var iconsInactiveDark   = "'rgba(0,0,0,0.38)'";
//Light Set
var baseTextLight       = "'rgba(255,255,255,1)'";
var primaryTextLight    = "'rgba(255,255,255,1)'";
var secondaryTextLight  = "'rgba(255,255,255,0.8)'";
var disabledTextLight   = "'rgba(255,255,255,0.5)'";
var dividersLight       = "'rgba(255,255,255,0.12)'";
var iconsActiveLight    = "'rgba(255,255,255,1)'";
var iconsInactiveLight  = "''rgba(255,255,255,0.5)'";

//Typography

//Sizes
var p                   = 14;
var h1                  = 30;
var h2                  = 28;
var h3                  = 26;
var h4                  = 22;
var h5                  = 20;
var h6                  = 18;

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
          <Image source={require('./_assets/loginBg@2x.png')} style={styles.backgroundImg}>
          <View style={styles.headerwrapper}>
              <View style={styles.headernavigation}>
                  <View style={styles.buttonWrap}>
                      <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.button}>
                          <View style={{alignSelf: 'flex-start',}}>
                          <Image source={require('./_assets/brandSig.png')}
                              style={styles.logoImg} />
                          </View>
                      </TouchableHighlight>
                  </View>
                  <View style={styles.divider}>
                      
                  </View>
                  <View style={styles.buttonWrap}>
                      <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.button}>
                          <Text style={styles.buttonTextLight}>SETTINGS</Text>
                      </TouchableHighlight>
                  </View>
                  <View style={styles.divider}>
                      
                  </View>
                  <View style={styles.buttonWrap}>
                      <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.button}>
                          <Text style={styles.buttonTextLight}>FIND</Text>
                      </TouchableHighlight>
                  </View>
              </View>
          </View>
        
          <View style={styles.contentwrapper}>
        
              <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.button}>
                  <Text style={styles.welcome}>Home</Text>
              </TouchableHighlight>
          
          </View>
  
          <View style={styles.footerwrapper}>
              <View style={styles.footernavigation}>
                  <View style={styles.buttonWrap}>
                      <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.buttonbottom}>
                          <Text>Home</Text>
                      </TouchableHighlight>
                  </View>
                  <View style={styles.divider}>
                      
                  </View>
                  <View style={styles.buttonWrap}>
                      <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.buttonbottom}>
                          <Text>Home</Text>
                      </TouchableHighlight>
                  </View>
                  <View style={styles.divider}>
                      
                  </View>
                  <View style={styles.buttonWrap}>
                      <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.buttonbottom}>
                          <Text>Home</Text>
                      </TouchableHighlight>
                  </View>
              </View>
          </View>
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
    backgroundColor: '#F5FCFF',
  },
  headerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: disabledTextDark,
    width: width,
    height: headerHeight + 5,
    borderBottomWidth: 1,
    borderBottomColor: '#cc5e55',
  },
  logoImg: {
    width: 50,
    height: 46,
  },
  buttonTextLight: {
    color:secondaryTextLight,
  },
  divider: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dividersDark,
    width: 1,
    height: divider,
  },
  headernavigation: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    flexWrap: 'wrap',
    paddingTop: 0,
    paddingBottom: 5,
    marginTop: 25,
    width: width
  },
  contentwrapper: {
    alignSelf: 'stretch',
    height: contentHeight,
    width: width,
    backgroundColor: secondaryTextLight,
  },
  footerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: disabledTextDark,
    width: width,
    height: footerHeight,
    borderTopWidth: 1,
    borderTopColor: '#cc5e55',
  },
  footernavigation: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  buttonWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonbottom: {
    height: 75,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: h1,
    color: primaryTextDark,
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover'
  },
});

export default Main
