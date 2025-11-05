import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import type { AppTabsParamList } from '../navigation/types';
type Route = RouteProp<AppTabsParamList, 'Settings'>;
export default function SettingsScreen() {
  const route = useRoute<Route>();
  const section = route.params?.section ?? 'general';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>Section: {section}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1420', padding: 24, justifyContent: 'center' },
  title: { color: '#e8eaed', fontSize: 22, fontWeight: '700', marginBottom: 12 },
  text: { color: '#e8eaed' },
});
