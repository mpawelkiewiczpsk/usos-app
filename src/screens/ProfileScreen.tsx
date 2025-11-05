import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation/types';
type Route = RouteProp<RootStackParamList, 'ProfileDetails'>;
export default function ProfileScreen() {
  const route = useRoute<Route>();
  const { userId } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User profile</Text>
      <Text style={styles.text}>userId: {userId}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1420', padding: 24, justifyContent: 'center' },
  title: { color: '#e8eaed', fontSize: 22, fontWeight: '700', marginBottom: 12 },
  text: { color: '#e8eaed' },
});
