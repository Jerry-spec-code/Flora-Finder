import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);

  <NavigationContainer>
  <Stack.Navigator>
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync();
      // Save the photo to the device's gallery
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      console.log('Photo saved to gallery:', asset.uri);

      // Pass the photo URI to your API here
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={(ref) => setCamera(ref)} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Text style={styles.text}>Take Picture</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
  width: 60,
  height: 60,
  backgroundColor: 'white',
  borderRadius: 30,
  alignSelf: 'center',
  marginBottom: 20,
  borderWidth: 5,
  borderColor: 'rgba(0, 0, 0, 0.2)',
  },

  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default CameraScreen;
