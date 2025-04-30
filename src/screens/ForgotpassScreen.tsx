import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function ForgotpassScreen({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState('');

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

            {/* Instruction Text */}
            <Text style={styles.subtitle}>
                Enter your email address to reset your password.
            </Text>

            {/* Email Input */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
            />

            {/* Reset Password Button */}
            <TouchableOpacity
                style={styles.resetButton}
                onPress={() => {
                    console.log('Reset Password pressed');
                    navigation.goBack(); // Navigate back to LoginScreen after resetting
                }}
            >
                <Text style={styles.resetButtonText}>Reset Password</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFDA7D',
        paddingHorizontal: 20,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'Scripter',
        letterSpacing: 8,
    },
    pattern: {
        color: '#D36F02',
    },
    pal: {
        color: '#004AAD',
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'Inter',
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#F5B820',
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#333',
        fontFamily: 'Inter',
    },
    resetButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#004AAD',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    resetButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        fontFamily: 'Inter',
    },
});