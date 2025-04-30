import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from '../screens/LoginScreen.tsx';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import HomepageScreen from '../screens/HomepageScreen.tsx';
import SignupScreen from '../screens/SignupScreen.tsx'; // Import SignupScreen
import ForgotpassScreen from '../screens/ForgotpassScreen.tsx'; // Import ForgotpassScreen
import VerificationScreen from '../screens/VerificationScreen.tsx';

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
                {<Stack.Screen
                    name="VerificationScreen"
                    component={VerificationScreen}
                />}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
