import AsyncStorage from '@react-native-async-storage/async-storage';

const IP_ADDRESS_KEY = 'IP_ADDRESS';
const DEFAULT_IP_ADDRESS = '192.168.0.4:3001';

export const getIpAddress = async (): Promise<string> => {
  try {
    const ip = await AsyncStorage.getItem(IP_ADDRESS_KEY);
    return ip ?? DEFAULT_IP_ADDRESS;
  } catch (error) {
    console.error('Failed to get IP address from storage:', error);
    return DEFAULT_IP_ADDRESS;
  }
};

export const setIpAddress = async (ip: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(IP_ADDRESS_KEY, ip);
  } catch (error) {
    console.error('Failed to set IP address in storage:', error);
  }
};
