import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Tile from './src/components/Tile';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <View style={styles.row}>
            <Tile color="red" title="Home" iconName="apps" />
            <Tile color="blue" title="Settings" iconName="settings-outline" />
          </View>
          <View style={styles.row}>
            <Tile color="rgb(255, 190, 0)" title="Library" iconName="library-outline" />
            <Tile color="green" title="Profile" iconName="person-outline" />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 30,
    gap: 15,
  },
  row: {
    flexDirection: 'row',
    gap: 15,
  },
});
