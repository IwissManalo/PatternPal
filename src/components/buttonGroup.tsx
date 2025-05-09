import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface ButtonGroupProps {
  currentScreen: string;
  navigation: any;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  currentScreen,
  navigation,
}) => {
  const buttons = [
    {label: 'Daily Challenge', screen: 'DailyChallenge'},
    {label: 'Cross-Stitch', screen: 'CrossStitch'},
    {label: 'Color Gallery', screen: 'ColorGallery'},
  ];

  return (
    <View style={styles.buttonContainer}>
      {buttons.map(btn => {
        const isActive = currentScreen === btn.screen;
        return (
          <TouchableOpacity
            key={btn.screen}
            style={isActive ? styles.filledButton : styles.outlinedButton}
            onPress={() => navigation.navigate(btn.screen)}>
            <Text style={isActive ? styles.filledText : styles.outlinedText}>
              {btn.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  filledButton: {
    backgroundColor: '#F3C343',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  filledText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
  },
  outlinedButton: {
    borderColor: '#F3C343',
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 11,
  },
  outlinedText: {
    color: '#F3C343',
    fontWeight: 'bold',
    fontSize: 11,
  },
});

export default ButtonGroup;
