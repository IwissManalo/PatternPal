import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function StartScreen({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image
                source={require('../assets/images/Logo.png')} // Ensure the path to Logo.png is correct
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

            {/* GET STARTED Button */}
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#004AAD' }]} // GET STARTED button color
                onPress={() => navigation.navigate('CarouselScreen1')} // Navigate to SignupScreen
            >
                <Text style={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>

            {/* LOG-IN Button */}
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#F5B820' }]} // LOG-IN button color
                onPress={() => navigation.navigate('SplashScreen2')} // Navigate to LoginScreen
            >
                <Text style={styles.buttonText}>LOG-IN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF', // Background color
    },
    logo: {
        width: 300,
        height: 300,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'center',
        fontFamily: 'Scripter',
        letterSpacing: 8,
    },
    pattern: {
        color: '#F5B820', // Color for "PATTERN"
    },
    pal: {
        color: '#36B0F6', // Color for "PAL"
    },
    subtitle: {
        fontSize: 18,
        fontFamily: 'Inter Medium',
        color: '#333333',
        marginTop: -5,
        textAlign: 'center',
        marginBottom: 115,
        letterSpacing: 2.72,
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF',
    },
});