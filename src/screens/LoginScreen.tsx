import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  const navigation = useNavigation();

  const onLogin = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Home',
        },
      ],
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <Pressable onPress={onLogin} style={styles.button}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 30,
    gap: 15,
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: '100%',
    backgroundColor: 'green',
    padding: 10,
  },
});

export default LoginScreen;
