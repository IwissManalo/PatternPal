import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import all screens
import SettingsScreen from '../screens/SettingsScreen';
import HomepageScreen from '../screens/HomepageScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotpassScreen from '../screens/ForgotpassScreen';
import VerificationScreen from '../screens/VerificationScreen';
import PVerificationScreen from '../screens/PVerificationScreen';
import PForgotpassScreen from '../screens/PForgotpassScreen';
import LoginScreen from '../screens/LoginScreen';
import StartScreen from '../screens/StartScreen';
import SplashScreen1 from '../screens/SplashScreen1';
import SplashScreen2 from '../screens/SplashScreen2';
import SplashScreen3 from '../screens/SplashScreen3';
import SplashScreen4 from '../screens/SplashScreen4';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen1" screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="StartScreen"
                    component={StartScreen}
                />
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
                    name="PVerificationScreen"
                    component={PVerificationScreen}
                />
                <Stack.Screen
                    name="PForgotpassScreen"
                    component={PForgotpassScreen}
                />
                <Stack.Screen
                    name="SplashScreen1"
                    component={SplashScreen1}
                />
                <Stack.Screen
                    name="SplashScreen2"
                    component={SplashScreen2}
                />
                <Stack.Screen
                    name="SplashScreen3"
                    component={SplashScreen3}
                />
                <Stack.Screen
                    name="SplashScreen4"
                    component={SplashScreen4}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}