import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function CarouselScreen3({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            {/* Top Right Corner Image */}
            <Image
                source={require('../assets/images/splashYellow.png')} // Ensure the path to splashOrange.png is correct
                style={styles.topRightImage}
                resizeMode="contain"
            />

            {/* Title */}
            <Text style={styles.title}>CONNECT</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
                Share your patterns, showcase your finished work, and find inspiration from the PatternPal community.
            </Text>

            {/* Middle Container */}
            <View style={styles.middleContainer}>
                {/* Logo in the container */}
                <Image
                    source={require('../assets/images/pic3.png')} // Ensure the path to pic1.png is correct
                    style={styles.logoInContainer}
                    resizeMode="cover" // Adjust image to fill the container
                />

                {/* Circle Indicators at the bottom of the container */}
                <View style={styles.circleContainer}>
                    <View style={[styles.circle, { backgroundColor: '#004AAD' }]} />
                    <View style={[styles.circle, { backgroundColor: '#004AAD' }]} />
                    <View style={[styles.circle, { backgroundColor: '#F5B820' }]} />
                </View>
            </View>

            {/* Bottom Logo */}
            <Image
                source={require('../assets/images/Logo.png')} // Ensure the path to Logo.png is correct
                style={styles.bottomLogo}
                resizeMode="contain"
            />

            <TouchableOpacity
                style={[styles.nextButton, { backgroundColor: '#36B0F6', bottom: 80 }]} // Adjusted position and color
                onPress={() => navigation.navigate('SplashScreen3')} // Navigate to the Signup screen
            >
                <Text style={styles.nextButtonText}>SIGN-UP</Text>
            </TouchableOpacity>

            {/* Next Button */}
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => navigation.navigate('SplashScreen2')} // Navigate to the next screen
            >

                <Text style={styles.nextButtonText}>LOG-IN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003781', // Screen background
        padding: 20,
    },
    topRightImage: {
        position: 'absolute',
        top: -40,
        right: -70,
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#36B0F6',
        textAlign: 'center',
        marginTop: 50,
    },
    subtitle: {
        fontSize: 16,
        color: '#FFF8E9',
        textAlign: 'center',
        marginTop: 10,
        marginHorizontal: 20,
    },
    middleContainer: {
        width: width * 0.8,
        height: height * 0.5,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#36B0F6',
        alignSelf: 'center',
        justifyContent: 'space-between', // Space between logo and circles
        alignItems: 'center',
        marginTop: 30,
        overflow: 'hidden',
        zIndex: 1 // Ensure the image doesn't overflow the container
    },
    logoInContainer: {
        width: '100%',
        height: '90%',
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10, // Position circles at the bottom of the container
    },
    circle: {
        width: 15,
        height: 15,
        borderRadius: 6,
        marginHorizontal: 5,
    },
    bottomLogo: {
        width: 400,
        height: 400,
        right: 180,
        bottom: 180,
        marginTop: 20,
        zIndex: 0// Space between the container and the logo
    },
    nextButton: {
        position: 'absolute',
        width: 106,
        bottom: 30,
        right: 20,
        backgroundColor: '#F5B820',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    nextButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});