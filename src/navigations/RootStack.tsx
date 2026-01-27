// src/navigations/RootStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingScreen } from '../screens/starts/LandingScreen';
import { LoginScreen } from '../screens/starts/LoginScreen';
import { WelcomeScreen } from '../screens/starts/WelcomeScreen';
import { NicknameScreen } from '../screens/starts/NicknameScreen';
import { MainDrawer } from './MainDrawer';

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      {/* Auth Screens */}
      <Stack.Screen 
        name="Landing" 
        component={LandingScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Nickname" 
        component={NicknameScreen} 
        options={{ headerShown: false }}
      />

      {/* Main Drawer (내부에 MainStack 포함) */}
      <Stack.Screen 
        name="MainDrawer" 
        component={MainDrawer} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
