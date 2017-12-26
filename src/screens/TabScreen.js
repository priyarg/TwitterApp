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


import Search from './Search';
import Timeline from './Timeline';
import Profile from './Profile';
import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';
import SideBar from './Profile';
//import SearchScreen from './HomeScreen/SearchScreen';




import {
  View, AppRegistry
} from 'react-native';

/**export default class App extends Component {

  render() {
    
    return <HomeScreen />;
  }

}*/

export default class TabScreen extends React.Component {

  static navigationOptions = {
    header: null

  };


  constructor() {
    super();

    this.state = {
      selectedTab: 0
    };
  }

  //Code To change the header



  renderSelectedTab() {
    console.log(this.state.selectedTab);

    if (this.state.selectedTab == 0) {
      return (<Header style={{ backgroundColor: '#fff' }} hasTabs><Item style={{ paddingRight: 250, borderBottomWidth: 0 }}>
        <Button style={{ paddingTop: 15 }} transparent onPress={() => this.openDrawer()}>
          <Thumbnail small source={require('../images/Tulips.jpg')} />
        </Button>
        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 20 }}>Home</Text>
      </Item></Header>);
    } else if (this.state.selectedTab == 1) {
      return (<Header searchBar rounded style={{ backgroundColor: '#fff' }}>
        <Item>
          <Button style={{ paddingLeft: 10, paddingTop: 5 }} transparent onPress={() => this.openDrawer()}>
            <Thumbnail small source={require('../images/Tulips.jpg')} />
          </Button>
          <Input placeholder="Search Twitter" style={{ paddingLeft: 20 }} onChangeText={() => this.props.navigation.navigate('SearchScreen')} />

        </Item>
      </Header>);
    } else if (this.state.selectedTab == 2) {
      return (<Header style={{ backgroundColor: '#fff' }} hasTabs>
        <Item style={{ paddingRight: 250, borderBottomWidth: 0 }}>
          <Button style={{ paddingLeft: 20, paddingTop: 15 }} transparent onPress={() => this.openDrawer()}>
            <Thumbnail small source={require('../images/Tulips.jpg')} />
          </Button>
          <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 20 }}>Messages</Text>
        </Item></Header>);
    } else if (this.state.selectedTab == 3) {
      return (<Header style={{ backgroundColor: '#fff' }} hasTabs>
        <Item style={{ paddingRight: 250, borderBottomWidth: 0 }}>
          <Button style={{ paddingLeft: 20, paddingTop: 15 }} transparent onPress={() => this.openDrawer()}>
            <Thumbnail small source={require('../images/Tulips.jpg')} />
          </Button>
          <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 20 }}>Notifications</Text>
        </Item></Header>);
    }
    else {
      return (<Header style={{ backgroundColor: '#fff' }} hasTabs>
        <Item style={{ paddingRight: 150, borderBottomWidth: 0 }}>
          <Button style={{ paddingTop: 15 }} transparent onPress={() => this.openDrawer()}>
            <Thumbnail small source={require('../images/Tulips.jpg')} />
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
    const { navigate } = this.props.navigation;
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()} >
        <StyleProvider style={getTheme(commonColor)}>
          <Container>
            {this.renderSelectedTab()}
            <Tabs onChangeTab={({ i, ref, from }) => this.setState({ selectedTab: i })} initialPage={0} tabBarUnderlineStyle={{ borderBottomWidth: 2 }}>
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

AppRegistry.registerComponent('TabScreen', () => TabScreen);