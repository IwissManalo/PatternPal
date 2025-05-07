import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, LayoutAnimation, Platform, UIManager } from 'react-native';

const { width, height } = Dimensions.get('window');

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CarouselScreen1({ navigation }: { navigation: any }) {
    const handleNextPress = () => {
        // Smooth transition animation
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        navigation.navigate('CarouselScreen2'); // Navigate to the next screen
    };

    return (
        <View style={styles.container}>
            {/* Top Right Corner Image */}
            <Image
                source={require('../assets/images/splashOrange.png')} // Ensure the path to splashOrange.png is correct
                style={styles.topRightImage}
                resizeMode="contain"
            />

            {/* Title */}
            <Text style={styles.title}>CREATE</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
                Turn your inspirations into beautiful cross-stitch patterns with just a few taps.
            </Text>

            {/* Middle Container */}
            <View style={styles.middleContainer}>
                {/* Logo in the container */}
                <Image
                    source={require('../assets/images/pic1.png')} // Ensure the path to pic1.png is correct
                    style={styles.logoInContainer}
                    resizeMode="cover" // Adjust image to fill the container
                />

                {/* Circle Indicators at the bottom of the container */}
                <View style={styles.circleContainer}>
                    <View style={[styles.circle, { backgroundColor: '#F5B820' }]} />
                    <View style={[styles.circle, { backgroundColor: '#004AAD' }]} />
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
                onPress={handleNextPress} // Smooth navigation
            >
                <Text style={styles.nextButtonText}>NEXT</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6BC9FF', // Screen background
        padding: 20,
    },
    topRightImage: {
        position: 'absolute',
        top: -30,
        right: -40,
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#004AAD',
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
        borderColor: '#004AAD',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        overflow: 'hidden',
        zIndex: 1,
    },
    logoInContainer: {
        width: '92%',
        height: '90%',
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
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
        zIndex: 0, // Space between the container and the logo
    },
    nextButton: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        backgroundColor: '#F5B820',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    nextButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});