import React, { Component } from 'react';
import {
    Container, Header, Content, Footer, FooterTab, Left, Body,
    Text, Button, Icon, Drawer, List, ListItem, Item, Thumbnail
} from 'native-base';
import { View, Image } from 'react-native';


// Profile Page
export default class Profile extends Component {

    render() {
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };
        return (
           
            <Container style={{ backgroundColor: '#fff' }}>
                <Item style={{ borderBottomWidth: 0, paddingLeft: 30 }}>                    
                    <Thumbnail style={{ paddingLeft: 10 }} large source={require('../images/Tulips.jpg')}  />
                </Item>
                <Text note style={{ paddingLeft: 30 }}>@samantha</Text>
                <Item style={{ borderBottomWidth: 0, paddingLeft: 30 }}>
                    <Text>800 </Text>
                    <Text note>Followers</Text>
                    <Text>     700</Text>
                    <Text note>Following</Text>
                </Item>
                <View style={{
                    borderWidth: 1.2,
                    borderColor: 'lightblue',
                    margin: 10,
                }}>
                </View>
                <Content>
                    <List>
                        <ListItem style={{ paddingLeft: 10 }} icon>
                            <Left>
                                <Icon name="person" />
                            </Left>
                            <Body style={{ borderBottomWidth: 0 }}>
                                <Text>Profile</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={{ paddingLeft: 10 }} icon >
                            <Left>
                                <Icon name="list" />
                            </Left>
                            <Body style={{ borderBottomWidth: 0 }}>
                                <Text>Lists</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={{ paddingLeft: 10 }} icon>
                            <Left>
                                <Icon name="flash" />
                            </Left>
                            <Body style={{ borderBottomWidth: 0 }}>
                                <Text>Moments</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={{ paddingLeft: 10 }} icon>
                            <Left>
                                <Icon name="copy" />
                            </Left>
                            <Body style={{ borderBottomWidth: 0 }}>
                                <Text>Highlights</Text>
                            </Body>
                        </ListItem>
                        <View style={{
                            borderWidth: 0.5,
                            borderColor: 'lightblue',
                            margin: 10, paddingLeft: -10
                        }}>
                        </View>
                        <ListItem icon>
                            <Body style={{ borderBottomWidth: 0 }}>
                                <Text>Settings and privacy</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Body style={{ borderBottomWidth: 0 }}>
                                <Text>Help Center</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
                <Footer>
                    <FooterTab style={{ backgroundColor: '#FFF' }}>
                        <Button vertical>
                            <Icon name="ios-moon-outline" />
                        </Button>
                        <Button vertical>
                        </Button>
                        <Button vertical>
                            <Icon name="apps" />
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>

        );
    }
}

module.export = Profile;