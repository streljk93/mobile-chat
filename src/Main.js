import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import JHomeScreen from './components/JHomeScreen';
import JAuthScreen from './components/JAuthScreen';
import JSidebar from './components/JSidebar';

const Main = createDrawerNavigator({
    Auth: { screen: JAuthScreen },
    Home: { screen: JHomeScreen },
}, {
    contentComponent: props => <JSidebar {...props} />,
    contentOptions: {
        items: {
            Home: { screen: JHomeScreen },
        },
    },
});

export default Main;