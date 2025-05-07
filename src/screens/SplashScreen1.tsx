import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';

export default function SplashScreen1({ navigation }: { navigation: any }) {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value

    useEffect(() => {
        // Fade-in animation
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start(() => {
            // Fade-out animation after a delay
            setTimeout(() => {
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }).start(() => {
                    navigation.replace('StartScreen'); // Navigate to StartScreen
                });
            }, 500); // Delay before fade-out starts
        });
    }, [fadeAnim, navigation]);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../assets/images/Logo.png')} // Ensure the path to Logo.png is correct
                style={[styles.logo, { opacity: fadeAnim }]} // Apply fade animation
                resizeMode="contain"
            />
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
});