import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen.js';
import BottomTabNavigator from './components/BottomNavbar/BottomNavbar.js';
import CameraScreen from './components/CameraScreen/CameraScreen.js';
import Test from './components/Test/Test.js';
import Test2 from './components/Test/Test2.js';
import PlantScreen from './components/PlantScreen/PlantScreen.js';
import BottomNavbar from './components/BottomNavbar/BottomNavbar.js';


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Home" component={BottomNavbar} options={{ headerShown: false }} />
        <Stack.Screen name="Plant" component={PlantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

