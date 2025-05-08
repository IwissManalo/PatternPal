import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface patternCardProps {
  name: string;
  coin: number;
  image: any;
}

const patternCard: React.FC<patternCardProps> = ({name, coin, image}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.coinRow}>
        <Image
          source={require('../assets/images/ppal coin.png')}
          style={styles.coin}
        />
        <Text style={styles.coinText}>{coin}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFDA7D',
    borderColor: '#F3C343',
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    width: 100,
    alignItems: 'center',
    marginRight: 5,
  },
  image: {
    width: 85,
    height: 85,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004AAD',
    textAlign: 'center',
    marginTop: 0,
  },
  coinRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  coin: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  coinText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D36F02',
  },
});

export default patternCard;
