import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/buttons/CustomButton';

export default function HomeScreen({ navigation }: { navigation: any }) {
    return (
        <View>
            <Text>Home Screen</Text>
            <CustomButton
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}