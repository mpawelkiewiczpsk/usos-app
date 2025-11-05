import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RootStackParamList, AppTabsParamList } from './types';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileDetailsScreen from '../screens/ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<AppTabsParamList>();
const AppDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#0f1420',
    card: '#121a2a',
    text: '#e8eaed',
    border: '#1f2b40',
    primary: '#4c9aff',
  },
};

function RootTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
}
export default function RootNavigator() {
  const isDark = true; // you can wire up useColorScheme() === "dark"
  const screenOptions: NativeStackNavigationOptions = {
    headerStyle: { backgroundColor: '#121a2a' },
    headerTitleStyle: { color: '#e8eaed' },
    headerTintColor: '#e8eaed', // back arrow color
  };
  return (
    <NavigationContainer theme={isDark ? AppDarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Sign in' }} />
        <Stack.Screen name="AppTabs" component={RootTabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="ProfileDetails"
          component={ProfileDetailsScreen}
          options={{ title: 'User profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
