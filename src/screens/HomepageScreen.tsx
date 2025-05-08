import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Header from '../components/header';
import ButtonGroup from '../components/buttonGroup';
import PatternCard from '../components/PatternCard';
import {ScrollView} from 'react-native';

export default function HomepageScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        title="Daily Challenge"
        coinCount={4224}
      />

      <ButtonGroup currentScreen="DailyChallenge" navigation={navigation} />

      <ScrollView>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.monthText}>March 31</Text>
            <Text style={styles.dayText}>Wednesday</Text>
          </View>
          <Text style={styles.statusText}>Start your Challenge</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Choose your preferred pattern based on the following difficulty and
            obtain
            <Image
              source={require('../assets/images/ppal coin.png')}
              style={styles.inlineImage}
            />
            oins
          </Text>
        </View>

        <View style={styles.separator} />

        <View style={{paddingLeft: 20, paddingTop: 10}}>
          <Text style={styles.sectionTitle}>
            THREAD EXPLORER <Text style={{color: '#F3C343'}}>(BEGINNER)</Text>
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          {[...Array(4)].map((_, index) => (
            <PatternCard
              key={index}
              name="Penguin Heart"
              coin={20}
              image={require('../assets/images/penguinHeart.png')}
            />
          ))}
        </ScrollView>

        <View style={{paddingLeft: 20, paddingTop: 10}}>
          <Text style={styles.sectionTitle}>
            STITCH CRAFTER <Text style={{color: '#F3C343'}}>(MEDIUM)</Text>
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 30,
          }}>
          {[...Array(4)].map((_, index) => (
            <PatternCard
              key={index}
              name="Penguin Heart"
              coin={30}
              image={require('../assets/images/penguinHeart.png')}
            />
          ))}
        </ScrollView>

        <View style={{paddingLeft: 20}}>
          <Text style={styles.sectionTitle}>
            PATTERN ARTISAN <Text style={{color: '#F3C343'}}>(HARD)</Text>
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 30,
          }}>
          {[...Array(4)].map((_, index) => (
            <PatternCard
              key={index}
              name="Penguin Heart"
              coin={40}
              image={require('../assets/images/penguinHeart.png')}
            />
          ))}
        </ScrollView>

        <View style={{paddingLeft: 20}}>
          <Text style={styles.sectionTitle}>
            MASTER EMBROIDERER
            <Text style={{color: '#F3C343'}}>(EXTRA HARD)</Text>
          </Text>
        </View>

        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 30,
          }}>
          {[...Array(4)].map((_, index) => (
            <PatternCard
              key={index}
              name="Penguin Heart"
              coin={50}
              image={require('../assets/images/penguinHeart.png')}
            />
          ))}
        </ScrollView>
      </ScrollView>
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
  descriptionContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginLeft: 15,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionText: {
    color: '#004AAD',
    fontSize: 14,
    fontWeight: 'bold',
  },
  inlineImage: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    transform: [{translateY: 4}],
  },
  coinImage: {
    width: 24,
    height: 24,
    marginRight: 0,
  },
  separator: {
    height: 3,
    backgroundColor: '#004AAD',
    marginHorizontal: 35,
    marginBottom: 10,
  },
  sectionTitle: {
    textAlign: 'center',
    color: '#004AAD',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
