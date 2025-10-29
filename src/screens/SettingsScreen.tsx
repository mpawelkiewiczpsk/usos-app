import { View, Text } from 'react-native';

function SettingsScreen({ route }) {
  const { personName, itemId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>{personName}</Text>
      <Text>{itemId}</Text>
    </View>
  );
}

export default SettingsScreen;
