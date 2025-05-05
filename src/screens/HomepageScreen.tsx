import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomepageScreen({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image
                source={require('../assets/images/Logo.png')} // Adjust the path to your logo
                style={styles.logo}
                resizeMode="contain"
            />

            {/* Welcome Message */}
            <Text style={styles.welcomeText}>Welcome to PatternPal!</Text>
            <Text style={styles.subtitle}>Create. Craft. Connect.</Text>

            {/* Navigation Buttons */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ProfileScreen')} // Navigate to Profile
            >
                <Text style={styles.buttonText}>Go to Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Settings')} // Navigate to Settings
            >
                <Text style={styles.buttonText}>Go to Settings</Text>
            </TouchableOpacity>

            {/* Sign Up Link */}
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFDA7D',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#004AAD',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    signupText: {
        fontSize: 14,
        color: '#333',
    },
    signupLink: {
        fontSize: 14,
        color: '#004AAD',
        marginLeft: 5,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
});

