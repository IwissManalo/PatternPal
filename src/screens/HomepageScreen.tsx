import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/header';
import ButtonGroup from '../components/buttonGroup';

export default function HomepageScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>

    <Header navigation={navigation} title="Daily Challenge" coinCount={4224} />
    <ButtonGroup />

      <View style={styles.titleContainer}>
        <View>
            <Text style={styles.monthText}>March 31</Text>
            <Text style={styles.dayText}>Wednesday</Text>
        </View>
        <Text style={styles.statusText}>Start your Challenge</Text> 
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusText: {
    color: '#fff',
    fontSize: 13,
    alignSelf: 'center',
  },
  titleContainer: {
    backgroundColor: '#36B0F6',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#004AAD',
    flexDirection: 'row',           
    justifyContent: 'space-between',
    alignItems: 'center',           
  },
  monthText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dayText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
