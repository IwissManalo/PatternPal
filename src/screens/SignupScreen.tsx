import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignupScreen({ navigation }: { navigation: any }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
        try {
            const response = await fetch('http://localhost:3001/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    username,
                    email,
                    password,
                    phone_number: '', // Add phone number if needed
                    account_role: 'user', // Default role
                    user_credit: 0, // Default credit
                }),
            });
            const data = await response.json();
            if (response.ok) {
                Alert.alert('Success', 'User registered successfully');
                navigation.navigate('VerificationScreen');
            } else {
                Alert.alert('Error', data.error || 'Registration failed');
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to register user');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
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

            {/* First Name Input */}
            <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor="#999"
                value={firstName}
                onChangeText={setFirstName}
            />

            {/* Last Name Input */}
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="#999"
                value={lastName}
                onChangeText={setLastName}
            />

            {/* Email Input */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
            />

            {/* Username Input */}
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#999"
                value={username}
                onChangeText={setUsername}
            />

            {/* Password Input */}
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

            {/* Confirm Password Input */}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Confirm Password"
                    placeholderTextColor="#999"
                    secureTextEntry={!confirmPasswordVisible}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                    <Ionicons
                        name={confirmPasswordVisible ? 'eye' : 'eye-off'}
                        size={24}
                        color="#999"
                    />
                </TouchableOpacity>
            </View>

            {/* Proceed Button */}
            <TouchableOpacity
                style={styles.signupButton}
                onPress={handleRegister}
            >
                <Text style={styles.signupButtonText}>PROCEED</Text>
            </TouchableOpacity>

            {/* Log-in Link */}
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.loginLink}>Log-in here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6BC9FF',
        paddingTop: 30,
    },
    logo: {
        width: 250,
        height: 250,
        marginTop: 5,
        position: 'absolute',
        top: 50,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 210,
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
    pattern: {
        color: '#004AAD',
    },
    pal: {
        color: '#FFFFFF',
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#F5B820',
        paddingHorizontal: 15,
        marginBottom: 10,
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    passwordContainer: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#F5B820',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 8,
    },
    passwordInput: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    signupButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#004AAD',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    signupButtonText: {
        fontSize: 15,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    loginText: {
        fontSize: 14,
        fontFamily: 'Inter',
        color: '#000000',
        fontWeight: 'bold',
    },
    loginLink: {
        fontSize: 14,
        fontFamily: 'Inter',
        color: '#FFFFFF',
        marginLeft: 5,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
});
