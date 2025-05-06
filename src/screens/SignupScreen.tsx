import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignupScreen({ navigation }: { navigation: any }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image
                source={require('../assets/images/Logo.png')} // Ensure the path to the image is correct
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

            {/* Full Name Input */}
            <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName}
            />

            {/* Email Input */}
            <TextInput
                style={styles.input}
                placeholder="Last Name"
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
                onPress={() => {
                    console.log('Proceed pressed');
                    navigation.navigate('VerificationScreen'); // Redirect to VerificationScreen
                }}
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
        paddingTop: 30, // Added padding to move all elements down
    },
    logo: {
        width: 250,
        height: 250,
        marginTop: -35,
        position: 'absolute',
        top: 50, // Adjusted to move the logo down
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 260, // Adjusted to move the title down
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