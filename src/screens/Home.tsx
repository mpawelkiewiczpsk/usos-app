import { Button, View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Tile from '../components/Tile';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Pressable style={{ flex: 1, height: 120 }}>
            <Tile color="red" title="Home" iconName="apps" />
          </Pressable>
          <Pressable
            style={{ flex: 1, height: 120 }}
            onPress={() =>
              navigation.navigate('Settings', {
                personName: 'Mateusz',
                itemId: 5,
              })
            }
          >
            <Tile color="blue" title="Settings" iconName="settings-outline" />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={{ flex: 1, height: 120 }}>
            <Tile color="rgb(255, 190, 0)" title="Library" iconName="library-outline" />
          </Pressable>
          <Pressable
            style={{ flex: 1, height: 120 }}
            onPress={() => navigation.navigate('Profile')}
          >
            <Tile color="green" title="Profile" iconName="person-outline" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default HomeScreen;
