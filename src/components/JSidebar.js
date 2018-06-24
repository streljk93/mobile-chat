import React from "react";
import { DrawerItems, SafeAreaView } from "react-navigation";
import { ScrollView, Image, View, Text } from "react-native";
import { Button, Icon } from "native-base";

const routes = ["Home", "Chat", "Profile"];

export default class JSidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <SafeAreaView
                    style={{ flex: 1 }}
                    forceInsert={{ top: 'always', horizontal: 'never' }}>
                    <View
                        style={{
                            height: 180,
                            width: "100%",
                            backgroundColor: '#3755AF',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Icon name='home' style={{ color: 'white' }} />
                        <Text style={{ color: 'white', fontSize: 25 }}>signin / signout</Text>
                    </View>
                    <DrawerItems {...this.props} />
                </SafeAreaView>
            </ScrollView>
        );
    }
}