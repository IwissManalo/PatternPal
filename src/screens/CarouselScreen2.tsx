import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function CarouselScreen2({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            {/* Top Right Corner Image */}
            <Image
                source={require('../assets/images/splashBlue.png')} // Ensure the path to splashOrange.png is correct
                style={styles.topRightImage}
                resizeMode="contain"
            />

            {/* Title */}
            <Text style={styles.title}>CRAFT</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
                Follow guided tutorials, check your progress with our smart scanner, and bring your patterns to life.
            </Text>

            {/* Middle Container */}
            <View style={styles.middleContainer}>
                {/* Logo in the container */}
                <Image
                    source={require('../assets/images/pic2.png')} // Ensure the path to pic1.png is correct
                    style={styles.logoInContainer}
                    resizeMode="cover" // Adjust image to fill the container
                />

                {/* Circle Indicators at the bottom of the container */}
                <View style={styles.circleContainer}>
                    <View style={[styles.circle, { backgroundColor: '#004AAD' }]} />
                    <View style={[styles.circle, { backgroundColor: '#F5B820' }]} />
                    <View style={[styles.circle, { backgroundColor: '#004AAD' }]} />
                </View>
            </View>

            {/* Bottom Logo */}
            <Image
                source={require('../assets/images/Logo.png')} // Ensure the path to Logo.png is correct
                style={styles.bottomLogo}
                resizeMode="contain"
            />

            {/* Next Button */}
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => navigation.navigate('CarouselScreen3')} // Navigate to the next screen
            >
                <Text style={styles.nextButtonText}>NEXT</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDA7D', // Screen background
        padding: 20,
    },
    topRightImage: {
        position: 'absolute',
        top: -40,
        right: -75,
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#D36F02',
        textAlign: 'center',
        marginTop: 50,
    },
    subtitle: {
        fontSize: 16,
        color: '#000000',
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
        borderColor: '#D36F02',
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
        width: 87,
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