import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Alert,
    ActivityIndicator,
} from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

import { getIpAddress } from '../utils/ipStorage';

export default function LoginScreen({ navigation }: { navigation: any }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert('Error', 'Please enter both username and password.');
            return;
        }
        setLoading(true);
        try {
            const ipAddress = await getIpAddress();
            const response = await fetch(`http://${ipAddress}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                // Login successful, navigate to HomepageScreen
                navigation.navigate('HomepageScreen');
            } else {
                Alert.alert('Login Failed', data.error || 'Invalid username or password');
                console.error('Login failed:', data);
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to connect to server. Please try again later.');
            console.error('Network error:', error);
        } finally {
            setLoading(false);
        }
    };

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
                    autoCapitalize="none"
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
                        autoCapitalize="none"
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
                    <TouchableOpacity onPress={() => navigation.navigate('SplashScreen4')}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                {/* Login Button */}
                <TouchableOpacity
                    style={[styles.button, isPressed && { backgroundColor: '#36B0F6' }]}
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
                    onPress={handleLogin}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                    ) : (
                        <Text style={styles.buttonText}>LOG-IN</Text>
                    )}
                </TouchableOpacity>

                {/* Sign-up Text */}
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SplashScreen3')}>
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
        paddingTop: 20,
        paddingBottom: 50,
    },
    logo: {
        width: width * 0.55, // Final size of the logo in the login screen
        height: height * 0.34,
        marginTop: 10,
        marginBottom: -40,
    },
    title: {
        fontSize: width * 0.1,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 10,
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
        marginTop: -8,
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
        marginBottom: 12,
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
        marginBottom: 18,
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
        marginTop: 40,
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
