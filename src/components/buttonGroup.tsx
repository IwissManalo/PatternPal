import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonGroup = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.filledButton}>
        <Text style={styles.filledText}>Daily Challenge</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.outlinedButton}>
        <Text style={styles.outlinedText}>Cross-Stitch</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.outlinedButton}>
        <Text style={styles.outlinedText}>Paint by Numbers</Text>
      </TouchableOpacity>
    </View>
  );
}
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
