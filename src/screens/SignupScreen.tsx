import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Platform, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

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
            const response = await fetch('http://localhost:3001/api/users/signup/send-otp', {
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
                // Do not show success alert, just navigate
                navigation.navigate('VerificationScreen');
            } else {
                // Do not show error alert, just navigate
                navigation.navigate('VerificationScreen');
            }
        } catch (error) {
            // Do not show error alert, just navigate
            console.error(error);
            navigation.navigate('VerificationScreen');
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Keyboard adjustment for iOS & Android
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    {/* Logo and Sticky Header */}
                    <View style={styles.stickyHeader}>
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
                    </View>

                    {/* Form Inputs */}
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        placeholderTextColor="#999"
                        value={firstName}
                        onChangeText={setFirstName}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                        placeholderTextColor="#999"
                        value={lastName}
                        onChangeText={setLastName}
                    />

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
                    handleRegister();
                }}
            >
                <Text style={styles.signupButtonText}>PROCEED</Text>
            </TouchableOpacity>

                    {/* Log-in Link */}
                    <View style={styles.loginContainer}>
                        <Text style={styles.loginText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SplashScreen2')}>
                            <Text style={styles.loginLink}>Log-in here</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6BC9FF',
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start', // Align items to the top
        alignItems: 'center',
        paddingTop: 10, // Reduced space for better alignment towards the top
        paddingBottom: 30, // Bottom padding for smoother scrolling
    },
    stickyHeader: {
        alignItems: 'center',
        marginTop: 20, // Set proper space between logo and the top of the screen
        marginBottom: 25, // Controlled space after header elements
    },
    logo: {
        width: width * 0.8, // 60% of the screen width
        height: height * 0.34, // 30% of the screen height
        marginBottom: 15, // Ensure space between logo and title
    },
    title: {
        fontSize: width * 0.1, // Responsive to screen width
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 5,
        textAlign: 'center',
        fontFamily: 'Scripter',
        letterSpacing: 8,
    },
    subtitle: {
        fontSize: 18, // Responsive to screen width
        fontFamily: 'Inter Medium',
        color: '#333333',
        textAlign: 'center',
        marginBottom: 18, // Ensure spacing after the subtitle before form inputs
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
        marginBottom: 15, // Consistent space between inputs
        fontSize: width * 0.04,
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
        marginBottom: 12, // Slightly more space between password fields
    },
    passwordInput: {
        flex: 1,
        fontSize: width * 0.04, // Responsive font size
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
        fontSize: width * 0.04, // Responsive font size
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    loginText: {
        fontSize: width * 0.04, // Responsive font size
        fontFamily: 'Inter',
        color: '#000000',
        fontWeight: 'bold',
    },
    loginLink: {
        fontSize: width * 0.04, // Responsive font size
        fontFamily: 'Inter',
        color: '#FFFFFF',
        marginLeft: 5,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
});
