import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PlantScreen = ({route}) => {
  const { message } = route.params;
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
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
