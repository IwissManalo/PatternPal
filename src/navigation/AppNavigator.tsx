import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import all screens
import SettingsScreen from '../screens/SettingsScreen';
import HomepageScreen from '../screens/HomepageScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotpassScreen from '../screens/ForgotpassScreen';
import VerificationScreen from '../screens/VerificationScreen';
import EVerificationScreen from '../screens/EVerificationScreen';
import PVerificationScreen from '../screens/PVerificationScreen';
import LoginScreen from '../screens/LoginScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                />
                <Stack.Screen
                    name="HomepageScreen"
                    component={HomepageScreen}
                />
                <Stack.Screen
                    name="ForgotpassScreen"
                    component={ForgotpassScreen}
                />
                <Stack.Screen
                    name="SignupScreen"
                    component={SignupScreen}
                />
                <Stack.Screen
                    name="VerificationScreen"
                    component={VerificationScreen}
                />
                <Stack.Screen
                    name="EVerificationScreen"
                    component={EVerificationScreen}
                />
                <Stack.Screen
                    name="PVerificationScreen"
                    component={PVerificationScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}