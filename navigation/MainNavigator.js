import { View, Text } from 'react-native'
import React from 'react'
import Splash from '../screens/onboarding/Splash';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import JobPostingNavigator from './JobPostingNavigator';
import JobSearchingNavigator from './JobSearchingNavigator';
import SelectUser from '../screens/onboarding/SelectUser';

const STACK = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <STACK.Screen
                name='SelectUser'
                component={SelectUser}
                options={{ headerShown: false }}
            />
            <STACK.Screen
                name='JobPostingNavigator'
                component={JobPostingNavigator}
                options={{ headerShown: false }}
            />
            <STACK.Screen
                name='JobSearchingNavigator'
                component={JobSearchingNavigator}
                options={{ headerShown: false }}
            />
        </NavigationContainer>
    )
}

export default MainNavigator;