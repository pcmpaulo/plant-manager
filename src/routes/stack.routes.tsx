import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from "../styles/colors";

import { Welcome } from '../pages/welcome/welcome';
import { UserIdentification } from '../pages/userIdentification/UserIdentification';
import { Confirmation } from '../pages/confirmation/Confirmation';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <stackRoutes.Screen 
            name="Welcome"
            component={Welcome}
        />
        <stackRoutes.Screen 
            name="UserIdentification"
            component={UserIdentification}
        />
        <stackRoutes.Screen 
            name="Confirmation"
            component={Confirmation}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;