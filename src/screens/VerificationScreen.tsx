import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Keyboard } from 'react-native';

export default function VerificationScreen({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isPressed, setIsPressed] = useState(false);

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

            {/* Line */}
            <View style={styles.line} />

            {/* Instruction Text */}
            <Text style={styles.loginText}>To create your account we need to verify</Text>
            <Text style={styles.loginText1}>your contact information first</Text>

            {/* Email Input */}
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
            />

            <TouchableOpacity
                style={[
                    styles.button,
                    isPressed && { backgroundColor: '#36B0F6' },
                ]}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                onPress={() => {
                    navigation.navigate('EVerificationScreen'); // Use the correct screen name
                }}
            >
                <Text style={styles.buttonText}>SEND CODE TO EMAIL</Text>
            </TouchableOpacity>

            {/* Or Text */}
            <Text style={styles.loginText2}>Or</Text>

            {/* Phone Number Input with Philippine Flag */}
            <View style={styles.phoneInputContainer}>
                <Image
                    source={require('../assets/images/philippine-flag.png')} // Add the Philippine flag image
                    style={styles.flagIcon}
                />
                <TextInput
                    style={styles.phoneInput}
                    placeholder="Enter your phone number"
                    placeholderTextColor="#999"
                    value={phoneNumber}
                    onChangeText={(text) => {
                        setPhoneNumber(text);
                        if (text.length === 11) { // Adjust the length as needed
                            Keyboard.dismiss(); // Automatically dismiss the keyboard
                        }
                    }}
                    keyboardType="numeric"
                />
            </View>

            {/* Send Code to Phone Button */}
            <TouchableOpacity
                style={[
                    styles.button,
                    isPressed && { backgroundColor: '#36B0F6' },
                ]}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                onPress={() => {
                    console.log('Send Code to Phone pressed');
                    // Add phone verification logic here
                }}
            >
                <Text style={styles.buttonText}>SEND CODE TO PHONE</Text>
            </TouchableOpacity>

            {/* Back Button */}
            <TouchableOpacity
                style={[
                    styles.button1,
                    isPressed && { backgroundColor: '#36B0F6' },
                ]}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                onPress={() => navigation.navigate('SignupScreen')}
            >
                <Text style={styles.buttonText}>BACK</Text>
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
    },
    logo: {
        width: 250,
        height: 250,
        marginTop: 5,
        position: 'absolute',
        top: 20,
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
    line: {
        width: '80%',
        height: 3,
        marginTop: -10,
        backgroundColor: '#004AAD',
        marginBottom: 20,
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
        fontWeight: 'bold',
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#F5B820',
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    flagIcon: {
        width: 24,
        height: 16,
        marginRight: 10,
    },
    phoneInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#004AAD',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button1: {
        width: '80%',
        height: 50,
        backgroundColor: '#F5B820',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 28,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    loginText: {
        fontSize: 14,
        fontFamily: 'Inter',
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'justify',
        marginHorizontal: 20,
    },
    loginText1: {
        fontSize: 14,
        fontFamily: 'Inter',
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'justify',
        marginHorizontal: 20,
        marginBottom: 25,
    },
    loginText2: {
        fontSize: 14,
        fontFamily: 'Inter',
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'justify',
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 15,
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    loginLink: {
        fontSize: 14,
        fontFamily: 'Inter',
        color: '#FFFFFF',
        marginLeft: -12,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },

    pattern: {
        color: '#004AAD', // Color for "PATTERN"
    },
    pal: {
        color: '#FFFFFF', // Color for "PAL"
    },

});