import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }: { navigation: any }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [username, setUsername] = useState(''); // State for username/email
    const [password, setPassword] = useState(''); // State for password
    const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility
    const [keepLoggedIn, setKeepLoggedIn] = useState(false); // Checkbox state
    const [isPressed, setIsPressed] = useState(false); // Button press state

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                Alert.alert('Success', 'Login successful');
                navigation.navigate('HomepageScreen');
            } else {
                Alert.alert('Error', data.error || 'Login failed');
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to login');
            console.error(error);
        }
    };

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
        <View style={styles.container}>
            {/* Logo */}
            <Image
                source={require('../assets/images/Logo.png')} // Correct path to Logo.png
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
                <TouchableOpacity
                    onPress={() => setPasswordVisible(!passwordVisible)}
                >
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
                        {keepLoggedIn && (
                            <Text style={styles.checkmark}>✔</Text>
                        )}
                    </TouchableOpacity>
                    <Text style={styles.checkboxLabel}>Keep me logged in</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotpassScreen')}>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity
                style={[
                    styles.button,
                    isPressed && { backgroundColor: '#36B0F6' },
                ]}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={() => {
                handleLogin();
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDA7D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 250,
        marginTop: 50,
        position: 'absolute',
        top: 40,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 140,
        marginBottom: 5,
        textAlign: 'center',
        fontFamily: 'Scripter',
        letterSpacing: 8,
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Inter Medium',
        color: '#333333',
        textAlign: 'center',
        marginBottom: 45,
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
        marginBottom: 8,
        marginTop: 8,
        fontSize: 16,
        color: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
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
        marginBottom: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
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
        marginBottom: 18,
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
        bottom: 40,
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
        position: 'absolute',
        bottom: 70,
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