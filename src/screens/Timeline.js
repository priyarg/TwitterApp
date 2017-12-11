import React, { Component } from 'react';
import {
  Container, Header, Content, Footer, FooterTab, Button, Icon, Item,
  Text, Left, Right, Body, Card, CardItem, Thumbnail, Fab
} from 'native-base';
import { Image, View, MapView } from 'react-native';

//Timeline Page

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    active: 'true'
  }

  render() {
    return (
      <Container>
        <Content >
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail small source={require('../images/Monopoly.jpg')} />
                <Body>
                  <Item style={{ borderBottomWidth: 0 }}>
                    <Text style={{ fontWeight: 'bold' }}>SmarterEveryDay</Text>
                    <Text note>  @smartrev</Text>
                    <Text note>5 min</Text>
                  </Item>
                </Body>
              </Left>
              <Button transparent>
                <Icon active name="ios-arrow-down" />
              </Button>
            </CardItem>
            <CardItem>
              <Text>What do you think a game is? Let's play.</Text>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../images/Monopoly.jpg')} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="ios-chatbubbles-outline" />
                  <Text>60</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent style={{ paddingLeft: 20 }}>
                  <Icon active name="md-repeat" />
                  <Text>2</Text>
                </Button>
              </Body>
              <Body>
                <Button transparent style={{ paddingLeft: 20 }}>
                  <Icon active name="ios-heart-outline" />
                  <Text >19</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent>
                  <Icon style={{ paddingRight: 20 }} active name="ios-mail-outline" />
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail small source={require('../images/Pancake.jpg')} />
                <Body>
                  <Item style={{ borderBottomWidth: 0 }}>
                    <Text style={{ fontWeight: 'bold' }}>Pritysim</Text>
                    <Text note>   @pritysim...</Text>
                    <Text note>20 min</Text>
                  </Item>
                </Body>
              </Left>
              <Button transparent>
                <Icon active name="ios-arrow-down" />
              </Button>
            </CardItem>
            <CardItem>
              <Text>Pancakes and eggs umm delicious breakfast</Text>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../images/Pancake.jpg')} style={{ height: 300, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="ios-chatbubbles-outline" />
                  <Text>100</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent style={{ paddingLeft: 20 }}>
                  <Icon active name="md-repeat" />
                  <Text>20</Text>
                </Button>
              </Body>
              <Body>
                <Button transparent style={{ paddingLeft: 20 }}>
                  <Icon active name="ios-heart-outline" />
                  <Text >190</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent>
                  <Icon style={{ paddingRight: 20 }} active name="ios-mail-outline" />
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail small source={require('../images/Snow.jpg')} />
                <Body>
                  <Item style={{ borderBottomWidth: 0 }}>
                    <Text style={{ fontWeight: 'bold' }}>KirBr</Text>
                    <Text note>  @kirbr</Text>
                    <Text note>35 min</Text>
                  </Item>
                </Body>
              </Left>
              <Button transparent>
                <Icon active name="ios-arrow-down" />
              </Button>
            </CardItem>
            <CardItem>
              <Text>Heavy snowfall this morning</Text>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../images/Snow.jpg')} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="ios-chatbubbles-outline" />
                  <Text>30</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent style={{ paddingLeft: 20 }}>
                  <Icon active name="md-repeat" />
                  <Text>29</Text>
                </Button>
              </Body>
              <Body>
                <Button transparent style={{ paddingLeft: 20 }}>
                  <Icon active name="ios-heart-outline" />
                  <Text >150</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent>
                  <Icon style={{ paddingRight: 20 }} active name="ios-mail-outline" />
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <View >
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}
          >
            <Icon name="md-add" />
          </Fab>
        </View>
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
    );
  }
}

module.export = Timeline;