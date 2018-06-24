import React from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default (props) => {
    return (
        <Footer>
            <FooterTab>
                <Button vertical active>
                    <Icon name="apps" />
                    <Text>Add todo</Text>
                </Button>
                <Button vertical>
                    <Icon name="camera" />
                    <Text>Camera</Text>
                </Button>
                <Button vertical>
                    <Icon active name="navigate" />
                    <Text>Navigate</Text>
                </Button>
                <Button vertical>
                    <Icon name="person" />
                    <Text>Contact</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
}