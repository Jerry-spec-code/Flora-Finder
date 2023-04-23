import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from 'client/components/CameraScreen/CameraScreen.js';
import PlantScreen from 'client/components/PlantScreen/PlantScreen.js';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation, route }) => {
  // Set the initial route when navigating from the WelcomeScreen
  useEffect(() => {
    if (route.params?.initialRoute) {
      navigation.navigate(route.params.initialRoute);
    }
  }, [route.params?.initialRoute, navigation]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#5DB075',
        inactiveTintColor: '#E8E8E8',
      }}
      initialRouteName="Camera"
    >
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Plant" component={PlantScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
