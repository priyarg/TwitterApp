/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Container, Header, Item, Input, Icon, Button,
  Text, Content, Footer, FooterTab, StyleProvider,
  connectStyle, Drawer, ActionSheet, Tab, Tabs, TabHeading, Left, Body, Thumbnail
} from 'native-base';



import Search from './src/screens/Search';
import Timeline from './src/screens/Timeline';
import Profile from './src/screens/Profile';
import getTheme from './src/native-base-theme/components';
import commonColor from './src/native-base-theme/variables/commonColor';
import SideBar from './src/screens/Profile';
//added for stack navigation
import { StackNavigator } from 'react-navigation';
import TabScreen from './src/screens/TabScreen';
import SearchScreen from './src/screens/SearchScreen';



import {
  View
} from 'react-native';


const App = StackNavigator({
  TabScreen: { screen: TabScreen },
  SearchScreen: { screen: SearchScreen }
},
);



export default App;
