import React from 'react';
import {
    Header,
    Left,
    Right,
    Body,
    Button,
    Icon,
    Title
} from 'native-base';

class JHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigator.openDrawer()}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>MapChat</Title>
                </Body>
                <Right />
            </Header>
        );
    }

}

export default JHeader;