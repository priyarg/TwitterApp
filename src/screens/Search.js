
import React, { Component } from 'react';
import {
  Container, Header, Item, Input, Icon, Button,
  Text, Content, Footer, FooterTab, StyleProvider,
  connectStyle, Drawer, ActionSheet, Tab, Tabs, TabHeading
} from 'native-base';

import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';


import {  
  View
} from 'react-native';

// Search Page 
export default class search extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>         
          <Content style={{ backgroundColor: '#f0f8ff' }}>
          </Content>
          <Footer>
            <FooterTab>
              <Button vertical>
                <Text style={{ fontWeight: 'bold' }}>All</Text>
              </Button>
              <Button vertical >
                <Text style={{ color: '#333333' }}>Mentions</Text>
              </Button>
              <Button vertical>
              </Button>
              <Button vertical>
                <Icon name="settings" />
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    );
  }
}

module.export = search;
