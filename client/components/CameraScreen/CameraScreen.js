import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Ionicons } from '@expo/vector-icons';

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [latestPhoto, setLatestPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      fetchLatestPhoto();
    })();
  }, []);

  const fetchLatestPhoto = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
      console.warn('Media library permissions not granted');
      return;
    }

    const { assets } = await MediaLibrary.getAssetsAsync({
      first: 1,
      mediaType: 'photo',
      sortBy: MediaLibrary.SortBy.creationTime,
    });

    if (assets.length > 0) {
      setLatestPhoto(assets[0]);
    }
  };

  const takePicture = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync();

      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      console.log('Photo saved to gallery:', asset.uri);

      fetchLatestPhoto();
    }
  };

  const goToPlantScreen = () => {
    navigation.navigate('PlantScreen');
  };

   if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

   return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={(ref) => setCamera(ref)} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <View />
        </TouchableOpacity>
      </View>
      <View style={styles.flowerButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Plant')}>
          <Ionicons name="flower-outline" size={32} color="white" />
        </TouchableOpacity>
      </View>
      {latestPhoto && (
        <TouchableOpacity
          onPress={() => {
            // Add any action when the thumbnail is pressed
          }}
          style={styles.thumbnailContainer}
        >
          <Image source={{ uri: latestPhoto.uri }} style={styles.thumbnail} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 0.9,
  },
  camera: {
    flex: 1,
  },
  buttonWrapper: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 10,
    borderWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  thumbnailContainer: {
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginTop: 70,
  },
  flowerButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default CameraScreen;
