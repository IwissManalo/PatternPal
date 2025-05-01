import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import all screens
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import HomepageScreen from '../screens/HomepageScreen.tsx';
import SignupScreen from '../screens/SignupScreen.tsx';
import ForgotpassScreen from '../screens/ForgotpassScreen.tsx';
import VerificationScreen from '../screens/VerificationScreen.tsx';
import EVerificationScreen from '../screens/EVerificationScreen.tsx';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}