/**
 * Damascus App
 * https://github.com/justchad/deapp
 * @flow
 */
'use strict';

import {StyleSheet, Dimensions} from "react-native";

//Dimensions and Calculated Heights
var {height, width}     = Dimensions.get('window');
var headerHeight = 86 - 1;
var footerHeight = 50 - 1;
var statusbarHeight = 20 - 1;
var calculatedHeight = height - headerHeight - footerHeight;
var contentHeight = calculatedHeight;
var divider = 50;
var paddedWidth = width - 20;

/* These are the colors vars, added initially. */

// Color Palette - App
var baseColor = "'rgba(0,159,183,1)'";
var secondaryColor = "'rgba(39,39,39,1)'";
var tertiaryColor = "'rgba(254,215,102,1)'";
var light = "'rgba(239,241,243,1)'";
var dark = "'rgba(3,54,67,1)'";
var statusBarBG = "'rgba(0,43,55,1)'";
var gray = "'rgba(39,39,39,0.2)'";
var bluegreen = "'rgba(32, 161, 152, 1)'";

// Color Palette - Dark Set
var baseTextDark = "'rgba(0,0,0,1)'";
var primaryTextDark = "'rgba(0,43,55,0.87)'";
var secondaryTextDark = "'rgba(0,0,0,0.54)'";
var disabledTextDark = "'rgba(0,0,0,0.38)'";
var dividersDark = "'rgba(0,0,0,0.12)'";
var iconsActiveDark = "'rgba(0,0,0,0.54)'";
var iconsInactiveDark = "'rgba(0,0,0,0.38)'";

// Color Palette - Light Set
var baseTextLight = "'rgba(255,255,255,1)'";
var primaryTextLight = "'rgba(253,246,227,1)'";
var secondaryTextLight = "'rgba(100,123,131,1)'";
var disabledTextLight = "'rgba(255,255,255,0.5)'";
var dividersLight = "'rgba(255,255,255,0.12)'";
var iconsActiveLight = "'rgba(255,255,255,1)'";
var iconsInactiveLight = "'rgba(255,255,255,0.5)'";
var tertiaryTextLight = "'rgba(253,246,227,1)'";

/* These are the official color vars, added later. */

// Color Palette - Design Official
var DaintreeDark: "'rgba(0, 43, 55, 1)'";
var DaintreeLight: "'rgba(3, 54, 67, 1)'";
var EcruWhite: "'rgba(238, 232, 212, 1)'";
var PearlLusta: "'rgba(253, 246, 226, 1)'";

// Color Palette - Content
var Nevada: "'rgba(87, 110, 117, 1)'";
var Gothic: "'rgba(100, 123, 131, 1)'";
var GrannySmith0: "'rgba(130, 148, 150,1)'";
var GrannySmith1 = "'rgba(147,161,161,1)'";

// Color Palette - Accent
var PirateGold: "'rgba(182, 138, 0,1)'";
var Grenadier: "'rgba(205, 74, 0,1)'";
var Cinnabar: "'rgba(222, 48, 39,1)'";
var Cerise: "'rgba(213, 49, 130,1)'";
var MoodyBlue: "'rgba(107, 111, 198,1)'";
var CuriousBlue: "'rgba(28, 137, 213,1)'";
var Elm: "'rgba(32, 161, 152,1)'";
var Olive: "'rgba(133, 154, 0,1)'";

//Typography

//Sizes
var p = 14;
var p16 = 16;
var p22 = 22;
var bold = '700';
var h1 = 30;
var h2 = 28;
var h3 = 26;
var h4 = 22;
var h5 = 20;
var h6 = 18;


module.exports = StyleSheet.create({

//App Container Styles
    wrapper: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },


    
});