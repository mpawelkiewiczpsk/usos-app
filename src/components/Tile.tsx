import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

interface Props {
  color: string;
  title?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
}

const Tile = ({ color, title, iconName = 'checkmark-circle' }: Props) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Ionicons name={iconName} size={32} color="#fff" />
      {!!title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  title: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});

export default Tile;
