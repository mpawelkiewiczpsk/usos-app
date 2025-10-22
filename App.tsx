import { StyleSheet, View, Dimensions } from 'react-native';
import Tile from "./src/components/Tile";

const windowWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.containerTile}>
            <Tile color='red' title='Home' iconName='apps' />
            <Tile color='blue' title='Settings' />
        </View>
        <View style={styles.containerTile}>
            <Tile color='yellow' />
            <Tile color='green' />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#fff',
      padding: 15,
      gap: 15,
      maxWidth: windowWidth - 15
  },
    containerTile: {
        flexDirection: 'row',
        gap: 15
    }
});
