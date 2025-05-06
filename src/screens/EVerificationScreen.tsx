import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

export default function EVerificationScreen({ navigation }: { navigation: any }) {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef<Array<TextInput | null>>([]);

    const handleInputChange = (text: string, index: number) => {
        const newCode = [...verificationCode];
        newCode[index] = text;
        setVerificationCode(newCode);

        if (text && index < 5) {
            inputRefs.current[index + 1]?.focus();
        } else if (index === 5) {
            Keyboard.dismiss();
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 50}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
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

                        {/* Enter Verification Code Text */}
                        <Text style={styles.verificationTitle}>Enter Verification Code</Text>
                        <Text style={styles.verificationSubtitle}>
                            Kindly check your email, We’ve sent a 6-.
                        </Text>
                        <Text style={styles.verificationSubtitle1}>
                            digit code to your Email.
                        </Text>

                        {/* 6 Square Textboxes for Verification Code */}
                        <View style={styles.codeContainer}>
                            {verificationCode.map((digit, index) => (
                                <TextInput
                                    key={index}
                                    ref={(ref) => (inputRefs.current[index] = ref)}
                                    style={styles.codeInput}
                                    maxLength={1}
                                    keyboardType="numeric"
                                    value={digit}
                                    onChangeText={(text) => handleInputChange(text, index)}
                                />
                            ))}
                        </View>

                        {/* Main Content - Keep the bottom section at the bottom */}
                        <View style={styles.contentContainer}>
                            {/* Didn't Receive a Code Section */}
                            <View style={styles.resendContainer}>
                                <Text style={styles.resendText}>Didn't receive a code?</Text>
                                <TouchableOpacity onPress={() => console.log('Resend code pressed')}>
                                    <Text style={styles.resendLink}>Resend code here</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Verify Button */}
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    console.log('Verify button pressed');
                                    // Add verification logic here
                                }}
                            >
                                <Text style={styles.buttonText}>VERIFY</Text>
                            </TouchableOpacity>

                            {/* Back Button */}
                            <TouchableOpacity
                                style={styles.button1}
                                onPress={() => navigation.goBack()}
                            >
                                <Text style={styles.buttonText}>BACK</Text>
                            </TouchableOpacity>
                        </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20, // Add padding to prevent UI elements from being too close to the bottom
    },
    logo: {
        width: 250,
        height: 250,
        marginTop: 5,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'center',
        fontFamily: 'Scripter',
        letterSpacing: 8,
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Inter Medium',
        color: '#333333',
        marginTop: 10,
        textAlign: 'center',
        marginBottom: 45,
        letterSpacing: 2.72,
    },
    line: {
        width: '80%',
        height: 3,
        backgroundColor: '#004AAD',
        marginBottom: 20,
        marginTop: -20,
    },
    verificationTitle: {
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#004AAD',
        marginBottom: 10,
    },
    verificationSubtitle: {
        fontSize: 14,
        fontFamily: 'Inter',
        color: '#333333',
        textAlign: 'center',
        marginBottom: 0,
        paddingHorizontal: 20,
    },
    verificationSubtitle1: {
        fontSize: 14,
        fontFamily: 'Inter',
        color: '#333333',
        textAlign: 'center',
        marginBottom: 40,
        paddingHorizontal: 20,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginRight: 0,
        marginBottom: 15,
    },
    codeInput: {
        width: 50,
        height: 60,
        borderWidth: 3,
        borderColor: '#004AAD',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        backgroundColor: '#FFF',
        marginHorizontal: 5,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Ensure the buttons stay at the bottom
        width: '100%',
        alignItems: 'center',
        paddingBottom: 40,
    },
    resendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    resendText: {
        fontSize: 14,
        marginTop: 30,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#004AAD',
    },
    resendLink: {
        fontSize: 14,
        marginTop: 30,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#FFFFFF',
        textDecorationLine: 'underline',
        marginLeft: 5,
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#004AAD',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
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
        marginBottom: 0,
        marginTop: 10,
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
    pattern: {
        color: '#004AAD',
    },
    pal: {
        color: '#FFFFFF',
    },
});
