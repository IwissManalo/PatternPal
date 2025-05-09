import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Import both outlined and filled SVGs
import CommunityOutlined from '../assets/images/navbarIcons/communityOutlined.svg';
import CommunityFilled from '../assets/images/navbarIcons/communityFilled.svg';
import MarketOutlined from '../assets/images/navbarIcons/marketOutlined.svg';
import MarketFilled from '../assets/images/navbarIcons/marketplaceFilled.svg';
import HomeOutlined from '../assets/images/navbarIcons/homeOutlined.svg';
import HomeFilled from '../assets/images/navbarIcons/homeFilled.svg';
import PatternsOutlined from '../assets/images/navbarIcons/mypatternsOutlined.svg';
import PatternsFilled from '../assets/images/navbarIcons/mypatternsFilled.svg';
import LeaderboardOutlined from '../assets/images/navbarIcons/leaderboardOutlined.svg';
import LeaderboardFilled from '../assets/images/navbarIcons/leaderboardFilled.svg';

interface NavBarProps {
  currentTab: string;
  onTabPress: (tab: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({currentTab, onTabPress}) => {
  const navigation = useNavigation();

  const tabs = [
    {
      label: 'Community',
      outlined: CommunityOutlined,
      filled: CommunityFilled,
      route: 'HomepageScreen', // Adjust this route
    },
    {
      label: 'Marketplace',
      outlined: MarketOutlined,
      filled: MarketFilled,
      route: 'HomepageScreen', // Adjust this route
    },
    {
      label: 'Home',
      outlined: HomeOutlined,
      filled: HomeFilled,
      route: 'HomepageScreen',
    },
    {
      label: 'My Patterns',
      outlined: PatternsOutlined,
      filled: PatternsFilled,
      route: 'HomepageScreen', // Adjust this route
    },
    {
      label: 'Leaderboards',
      outlined: LeaderboardOutlined,
      filled: LeaderboardFilled,
      route: 'LoginScreen', // Adjust this route
    },
  ];

  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const IconComponent =
          currentTab === tab.label ? tab.filled : tab.outlined;
        return (
          <TouchableOpacity
            key={tab.label}
            style={styles.tab}
            onPress={() => {
              onTabPress(tab.label);
              navigation.navigate(tab.route as never);
            }}>
            <IconComponent
              width={currentTab === tab.label ? 50 : 28}
              height={currentTab === tab.label ? 50 : 28}
              fill={currentTab === tab.label ? '#004AAD' : '#fff'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
  },
});

export default NavBar;
