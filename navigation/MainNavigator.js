import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/onboarding/Splash';
import JobPostingNavigator from './JobPostingNavigator';
import JobSearchingNavigator from './JobSearchingNavigator';
import SelectUser from '../screens/onboarding/SelectUser';

const STACK = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <STACK.Navigator initialRouteName="Splash">
                <STACK.Screen
                    name='Splash'
                    component={Splash}
                    options={{ headerShown: false }}
                />
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
            </STACK.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;