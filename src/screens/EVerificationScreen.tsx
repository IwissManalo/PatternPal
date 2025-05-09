import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function EVerificationScreen({ route, navigation }: { route: any; navigation: any }) {
    const { email } = route.params;
    const [otp, setOtp] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);

    const handleVerifyOTP = async () => {
        if (otp.length !== 6) {
            Alert.alert('Error', 'Please enter a valid 6-digit OTP.');
            return;
        }
        setIsVerifying(true);
        try {
            const response = await fetch('http://192.168.0.4:3001/api/users/signup/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp }),
            });
            const data = await response.json();
            if (response.ok && data.success) {
                Alert.alert('Success', 'Email verified successfully. You can now log in.', [
                    { text: 'OK', onPress: () => navigation.navigate('SplashScreen2') },
                ]);
            } else {
                Alert.alert('Verification Failed', data.message || 'Invalid OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            Alert.alert('Error', 'Failed to verify OTP. Please try again later.');
        } finally {
            setIsVerifying(false);
        }
    };

    const handleResendOTP = async () => {
        try {
            const response = await fetch('http://192.168.0.4:3001/api/users/signup/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (response.ok) {
                Alert.alert('OTP Sent', 'A new OTP has been sent to your email.');
            } else {
                Alert.alert('Error', data.error || 'Failed to resend OTP.');
            }
        } catch (error) {
            console.error('Error resending OTP:', error);
            Alert.alert('Error', 'Failed to resend OTP. Please try again later.');
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    <Text style={styles.title}>Email Verification</Text>
                    <Text style={styles.instruction}>
                        Enter the 6-digit code sent to your email:
                    </Text>
                    <Text style={styles.emailText}>{email}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter OTP"
                        keyboardType="numeric"
                        maxLength={6}
                        value={otp}
                        onChangeText={setOtp}
                    />
                    <TouchableOpacity
                        style={[styles.button, isVerifying && styles.buttonDisabled]}
                        onPress={handleVerifyOTP}
                        disabled={isVerifying}
                    >
                        <Text style={styles.buttonText}>{isVerifying ? 'Verifying...' : 'Verify OTP'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.resendButton} onPress={handleResendOTP}>
                        <Text style={styles.resendText}>Resend OTP</Text>
                    </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: width * 0.08,
        fontWeight: 'bold',
        color: '#004AAD',
        marginBottom: 20,
        fontFamily: 'Scripter',
    },
    instruction: {
        fontSize: width * 0.045,
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    emailText: {
        fontSize: width * 0.045,
        color: '#004AAD',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#F5B820',
        paddingHorizontal: 15,
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#004AAD',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonDisabled: {
        backgroundColor: '#7a9cc6',
    },
    buttonText: {
        color: '#FFF',
        fontSize: width * 0.045,
        fontWeight: 'bold',
        fontFamily: 'Inter',
    },
    resendButton: {
        marginTop: 10,
    },
    resendText: {
        color: '#004AAD',
        fontSize: width * 0.04,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});
