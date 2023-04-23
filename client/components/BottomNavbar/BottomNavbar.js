import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from 'client/components/CameraScreen/CameraScreen.js';
import PlantScreen from 'client/components/PlantScreen/PlantScreen.js';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress, isActive }) => (
  <TouchableOpacity
    style={styles.customTabBarButton}
    onPress={onPress}
  >
    <View style={[styles.circle, isActive ? styles.activeCircle : styles.inactiveCircle]}>
      {children}
    </View>
  </TouchableOpacity>
);

const BottomTabNavigator = () => {
    const BottomTabNavigator = ({ navigation, route }) => {
    // Set the initial route when navigating from the WelcomeScreen
    useEffect(() => {
        if (route.params?.initialRoute) {
        navigation.navigate(route.params.initialRoute);
        }
    }, [route.params?.initialRoute, navigation]);
  return (
    <Tab.Navigator
    initialRouteName={initialRoute}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return <View />;
        },
        tabBarButton: (props) => (
          <CustomTabBarButton {...props} isActive={props.focused} />
        ),
      })}
      tabBarOptions={{
        showLabel: false,
        style: styles.tabBar,
      }}
    >
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Plant" component={PlantScreen} />
    </Tab.Navigator>
  );
};
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
  customTabBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCircle: {
    backgroundColor: '#5DB075',
  },
  inactiveCircle: {
    backgroundColor: '#E8E8E8',
  },
});

export default BottomTabNavigator;
