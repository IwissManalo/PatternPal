import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  navigation: any;
  title?: string;
  coinCount?: number;
}

const Header: React.FC<HeaderProps> = ({ navigation, title = 'Cross-Stitch', coinCount }) => {
  return (
    <View style={styles.header}>
      {/* Left: Drawer Icon */}
      <View style={styles.sideSectionLeft}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Center: Title */}
      <View style={styles.centerSection}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Right: Optional Coin Count */}
      <View style={styles.sideSectionRight}>
        {coinCount !== undefined && (
          <View style={styles.rightSection}>
            <Image
              source={require('../assets/images/pic3.png')}
              style={styles.coinImage}
            />
            <Text style={styles.coinText}>{coinCount}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: '#004AAD',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 35,
    paddingHorizontal: 15,
  },
  sideSectionLeft: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'flex-start', // Aligns icon to the start
  },
  sideSectionRight: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  centerSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinImage: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  coinText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Header;
