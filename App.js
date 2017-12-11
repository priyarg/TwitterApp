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



import {    
  View
} from 'react-native';



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedTab: "Timeline"
    };
  }

  //Code To change the header
  renderSelectedTab() {
    switch (this.state.selectedTab) {
      case 'Search':
        return (<Header searchBar rounded style={{ backgroundColor: '#fff' }}>
          <Item>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
            <Input placeholder="Search Twitter" />
          </Item>
        </Header>);
        break;
      case 'Timeline':
        return (<Header style={{ backgroundColor: '#fff' }} hasTabs><Item style={{ paddingRight: 250, borderBottomWidth: 0 }}>
          <Button style={{ paddingTop: 15 }} transparent onPress={() => this.openDrawer()}>
            <Thumbnail small source={require('./src/images/Tulips.jpg')} />
          </Button>
          <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 20 }}>Home</Text>
        </Item></Header>);
        break;
      default:
        return (<Header style={{ backgroundColor: '#fff' }} hasTabs><Item style={{ paddingRight: 250, borderBottomWidth: 0 }}>
          <Button style={{ paddingTop: 15 }} transparent onPress={() => this.openDrawer()}>
            <Thumbnail small source={require('./src/images/Tulips.jpg')} />
          </Button>
          <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 20 }}>Home</Text>
        </Item></Header>);
    }
  }


  closeDrawer = () => {
    this._drawer._root.close()
  };
  openDrawer = () => {
    this._drawer._root.open()
  };


  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()} >
        <StyleProvider style={getTheme(commonColor)}>
          <Container>
            {this.renderSelectedTab()}
            <Tabs onChangeTab={({ i, ref, from })=> console.log(i)}  initialPage={0} tabBarUnderlineStyle={{ borderBottomWidth: 2 }}>            
              <Tab active={this.state.selectedTab === 'Timeline'} onChange={() => this.setState({ selectedTab: 'Timeline' })} heading={<TabHeading>                
                <Icon style={{ color: '#333333' }} name="home" />               
              </TabHeading>}>
                <Timeline />
              </Tab>
              <Tab active={this.state.selectedTab === 'Search'} onChange={() => this.setState({ selectedTab: 'Search' })} heading={<TabHeading>                
                <Icon on style={{ backgroundColor: '#FFF', color: '#333333' }} name="search" />                
              </TabHeading>} >
                <Search />
              </Tab>
              <Tab heading={<TabHeading><Icon style={{ color: '#333333' }} name="md-notifications" /></TabHeading>} >
              </Tab>
              <Tab heading={<TabHeading><Icon style={{ color: '#333333' }} name="ios-mail-outline" /></TabHeading>} >
              </Tab>
            </Tabs>
          </Container>
        </StyleProvider>
      </Drawer>
    );
  }
}

