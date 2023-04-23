import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PlantScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Plant Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlantScreen;
