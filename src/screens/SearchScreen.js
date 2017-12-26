import React from "react";
import { AppRegistry, Alert } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Item,
  Input,
  Title,
  Button,
  H1,Footer,FooterTab
} from "native-base";


// just a dummy page showing card where profile info should be shown
export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'SearchScreen',
    headerStyle:{ backgroundColor: '#FFF'},
    headerTitleStyle:{ color: 'blue'},
    header :null
    }
 
  render() {
    return (
      <Container>
         <Header style={{backgroundColor:'white'}}>
          <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: 'black'}} />
            </Button>
          </Left>
          <Body>
          <Item style={{width: 200}}>
          <Input placeholder="Search Twitter" />
        </Item>
          </Body>
          <Right />
        </Header>
        <Content padder>
         
        </Content>
        <Footer>
            <FooterTab style={{backgroundColor:'#FFF'}}>
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
    );
  }
}
AppRegistry.registerComponent('SearchScreen',()=>SearchScreen);