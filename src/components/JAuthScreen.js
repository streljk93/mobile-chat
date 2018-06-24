import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import {
    Container,
    Content,
    Text,
    InputGroup,
    Input,
    Grid,
    Col,
    Row,
    Button,
    Card,
    CardItem,
    Body,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import JHeader from './JHeader';
import JFooter from './JFooter';
import JSidebar from './JSidebar';

class JHomeScreen extends React.Component {

    static navigationOptions = {
        drawerLabel: () => null,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <StatusBar hidden={true} />
                <JHeader navigator={this.props.navigation} />
                <Content>
                    <Grid style={styles.wrap}>
                        <Col>
                            <Card>
                                <CardItem header>
                                    <Text>AUTHENTIFICATION</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Row size={0} marginBottom={15}>
                                            <InputGroup flex={1} borderType='underline'>
                                                <Icon size={20} name='user' style={{ color:'#384850' }} />
                                                <Input placeholder="Your login ..." />
                                            </InputGroup>
                                        </Row>
                                        <Row size={0} marginBottom={15}>
                                            <InputGroup flex={1} borderType='underline'>
                                                <Icon size={20} name='lock' style={{ color:'#384850' }} />
                                                <Input placeholder="Your password ..." />
                                            </InputGroup>
                                        </Row>
                                        
                                    </Body>
                                </CardItem>
                                <CardItem footer>
                                    <Row size={0}>
                                        <Button light style={{ flex: 1, marginRight: 10 }} full onPress={() => console.log('ok')}>
                                            <Text>Send</Text>
                                        </Button>
                                        <Button light style={{ flex: 2, marginLeft: 10 }} full onPress={() => console.log('ok')}>
                                            <Text>Registration</Text>
                                        </Button>
                                    </Row>
                                </CardItem>
                            </Card>
                            <Row size={0} marginBottom={10} marginTop={30} justifyContent="center">
                                <Button style={{ flex: 1 }} full iconLeft backgroundColor="#3b5998">
                                    <Icon size={20} color="white" name="facebook" />
                                    <Text>Login with Facebook</Text>
                                </Button>
                            </Row>
                            <Row size={0} marginBottom={10} justifyContent="center">
                                <Button style={{ flex: 1 }} full iconLeft backgroundColor="#C22222">
                                    <Icon size={20} color="white" name="google" />
                                    <Text>Login with Google</Text>
                                </Button>
                            </Row>
                            <Row size={0} marginBottom={10} justifyContent="center">
                                <Button style={{ flex: 1 }} full iconLeft backgroundColor="#36ACEB">
                                    <Icon size={20} color="white" name="twitter" />
                                    <Text>Login with Twitter</Text>
                                </Button>
                            </Row>
                            
                        </Col>
                    </Grid>
                </Content>
                <JFooter />
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    wrap: {
        padding: 15,
        paddingLeft: 15,
        paddingRight: 15,
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
    },
    item: {
        marginBottom: 20,
    },
    border: { display: 'flex', flexDirection: 'row', borderColor: 'red', borderWidth: 3 },
});

export default JHomeScreen;