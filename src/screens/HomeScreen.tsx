import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
type Nav = NativeStackNavigationProp<RootStackParamList, 'AppTabs'>;
export default function HomeScreen() {
  const navigation = useNavigation<Nav>();
  const openProfile = () => {
    navigation.navigate('ProfileDetails', { userId: 'user_123' });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity style={styles.btn} onPress={openProfile}>
        <Text style={styles.btnText}>Show profile user_12</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1420', padding: 24, justifyContent: 'center' },
  title: { color: '#e8eaed', fontSize: 22, fontWeight: '700', marginBottom: 12 },
  btn: { backgroundColor: '#4c9aff', padding: 14, borderRadius: 12, alignSelf: 'flex-start' },
  btnText: { color: '#0b0e13', fontWeight: '700' },
});
