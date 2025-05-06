import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Platform,
} from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ navigation }: { navigation: any }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                Scripter: require('../assets/fonts/Scripter-Regular.ttf'),
            });
            setFontsLoaded(true);
        }
        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                {/* Logo */}
                <Image
                    source={require('../assets/images/Logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                {/* Title */}
                <Text style={styles.title}>
                    <Text style={styles.pattern}>PATTERN</Text>
                    <Text style={styles.pal}>PAL</Text>
                </Text>

                {/* Subtitle */}
                <Text style={styles.subtitle}>Create. Craft. Connect.</Text>

                {/* Username or Email Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Username or email"
                    placeholderTextColor="#999"
                    value={username}
                    onChangeText={setUsername}
                />

                {/* Password Input with Eye Icon */}
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        <Ionicons
                            name={passwordVisible ? 'eye' : 'eye-off'}
                            size={24}
                            color="#999"
                        />
                    </TouchableOpacity>
                </View>

                {/* Checkbox and Forgot Password */}
                <View style={styles.optionsContainer}>
                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity
                            style={[
                                styles.checkbox,
                                keepLoggedIn && { backgroundColor: '#F5B820' },
                            ]}
                            onPress={() => setKeepLoggedIn(!keepLoggedIn)}
                        >
                            {keepLoggedIn && <Text style={styles.checkmark}>✔</Text>}
                        </TouchableOpacity>
                        <Text style={styles.checkboxLabel}>Keep me logged in</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotpassScreen')}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                {/* Login Button */}
                <TouchableOpacity
                    style={[styles.button, isPressed && { backgroundColor: '#36B0F6' }]}
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
                    onPress={() => {
                        console.log('Username:', username);
                        console.log('Password:', password);
                        navigation.navigate('HomepageScreen');
                    }}
                >
                    <Text style={styles.buttonText}>LOG-IN</Text>
                </TouchableOpacity>

                {/* Sign-up Text */}
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
                        <Text style={styles.signupLink}>Sign up here</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFDA7D',
    },
    scrollContainer: {
        alignItems: 'center',
        paddingTop: 20, // Adjust padding top for better alignment at the top
        paddingBottom: 50, // Ensure there is some padding at the bottom
    },
    logo: {
        width: width * 0.55,
        height: height * 0.34,
        marginTop: 10, // Adjusted marginTop to ensure proper alignment
        marginBottom: -40
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 25, // Reduced the top margin
        marginBottom: 10, // Retained a gap after the title
        textAlign: 'center',
        fontFamily: 'Scripter',
        letterSpacing: 8,
    },
    subtitle: {
        fontSize: 18,
        fontFamily: 'Inter Medium',
        color: '#333333',
        textAlign: 'center',
        marginBottom: 30,
        marginTop: -8,// Added a smaller gap after the subtitle
        letterSpacing: 2.72,
    },
    input: {
        width: '80%',
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#F5B820',
        paddingHorizontal: 15,
        marginBottom: 12, // Adjusted margin for proper spacing between inputs
        fontSize: 16,
        color: '#333',
        fontFamily: 'Inter',
        fontWeight: 'bold',
    },
    passwordContainer: {
        width: '80%',
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#F5B820',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 18, // Adjusted spacing between password fields
    },
    passwordInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        fontFamily: 'Inter',
        fontWeight: 'bold',
    },
    optionsContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 18, // Spacing between options
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#F5B820',
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkmark: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    checkboxLabel: {
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#000000',
    },
    forgotPassword: {
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#004AAD',
        textDecorationLine: 'underline',
    },
    pattern: {
        color: '#D36F02',
    },
    pal: {
        color: '#004AAD',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 60,
        marginBottom: 10,
    },
    signupText: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        color: '#333',
    },
    signupLink: {
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#004AAD',
        marginLeft: 5,
        textDecorationLine: 'underline',
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#004AAD',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40, // Reduced top margin for button
        marginBottom: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});
