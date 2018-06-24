import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Content, Text } from 'native-base';

import JHeader from './JHeader';
import JFooter from './JFooter';
import JSidebar from './JSidebar';

class JHomeScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <StatusBar hidden={true} />
                <JHeader navigator={this.props.navigation} />
                <Content style={{ padding: 15 }}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptatum sapiente rem unde vero. Reprehenderit non distinctio ad dicta autem ea, quidem qui aperiam, temporibus nihil totam sint enim alias pariatur optio deserunt ratione ab eaque, vero cupiditate. Pariatur nam iste non commodi earum mollitia enim, consequuntur tempore, autem, similique consectetur? Omnis molestiae, nisi nihil officiis nemo obcaecati aut facilis atque ratione veritatis sit, modi animi illum temporibus molestias fuga nulla eligendi quae! Dolorem possimus, nostrum libero culpa! Ad, quo quaerat sit quae, quis quisquam adipisci recusandae rem sequi architecto assumenda tempora, incidunt id animi saepe laboriosam, aut repudiandae repellat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptatum sapiente rem unde vero. Reprehenderit non distinctio ad dicta autem ea, quidem qui aperiam, temporibus nihil totam sint enim alias pariatur optio deserunt ratione ab eaque, vero cupiditate. Pariatur nam iste non commodi earum mollitia enim, consequuntur tempore, autem, similique consectetur? Omnis molestiae, nisi nihil officiis nemo obcaecati aut facilis atque ratione veritatis sit, modi animi illum temporibus molestias fuga nulla eligendi quae! Dolorem possimus, nostrum libero culpa! Ad, quo quaerat sit quae, quis quisquam adipisci recusandae rem sequi architecto assumenda tempora, incidunt id animi saepe laboriosam, aut repudiandae repellat.
                    </Text>
                </Content>
                <JFooter />
            </Container>
        );
    }

}

export default JHomeScreen;